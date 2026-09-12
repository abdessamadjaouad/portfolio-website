import { createServer } from "node:net";
import type { AddressInfo } from "node:net";
import { test, expect, chromium } from "@playwright/test";
import lighthouse from "lighthouse";

test("three mobile production runs meet launch budgets", async ({
  baseURL,
}, testInfo) => {
  test.setTimeout(180_000);
  const reservation = createServer();
  await new Promise<void>((resolve) =>
    reservation.listen(0, "127.0.0.1", resolve),
  );
  const port = (reservation.address() as AddressInfo).port;
  await new Promise<void>((resolve, reject) =>
    reservation.close((error) => (error ? reject(error) : resolve())),
  );
  const browser = await chromium.launch({
    args: [`--remote-debugging-port=${port}`],
  });
  try {
    for (let run = 1; run <= 3; run += 1) {
      const result = await lighthouse(baseURL!, {
        port,
        logLevel: "error",
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
      });
      if (!result) throw new Error("Lighthouse returned no result.");
      const { lhr } = result;
      await testInfo.attach(`lighthouse-${run}`, {
        body: JSON.stringify(lhr),
        contentType: "application/json",
      });
      const scores = Object.fromEntries(
        Object.entries(lhr.categories).map(([key, value]) => [
          key,
          Math.round((value.score ?? 0) * 100),
        ]),
      );
      const lcp = lhr.audits["largest-contentful-paint"].numericValue!;
      const cls = lhr.audits["cumulative-layout-shift"].numericValue!;
      const resources = lhr.audits["resource-summary"].details;
      const script =
        resources?.type === "table"
          ? resources.items.find((item) => item.resourceType === "script")
          : undefined;
      const jsBytes = Number(script?.transferSize ?? Infinity);
      console.log(
        JSON.stringify({
          run,
          ...scores,
          lcp: Math.round(lcp),
          cls,
          javascriptKB: Math.round(jsBytes / 1024),
        }),
      );
      expect.soft(scores.performance).toBeGreaterThanOrEqual(90);
      expect.soft(scores.accessibility).toBe(100);
      expect.soft(scores.seo).toBe(100);
      expect.soft(lcp).toBeLessThanOrEqual(2500);
      expect.soft(cls).toBeLessThanOrEqual(0.1);
      expect.soft(jsBytes).toBeLessThanOrEqual(180 * 1024);
    }
  } finally {
    await browser.close();
  }
});
