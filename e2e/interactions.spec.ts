import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "./fixtures";

test("search supports keyboard, safe filtering, focus trapping and restoration", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /^Search/ });
  await trigger.focus();
  await page.keyboard.press("Control+k");
  const dialog = page.getByRole("dialog", { name: "Find your way" });
  const search = dialog.getByRole("searchbox");
  await expect(search).toBeFocused();
  const centered = await dialog.evaluate((element) => {
    const bounds = element.getBoundingClientRect();
    return (
      Math.abs(bounds.left + bounds.width / 2 - window.innerWidth / 2) < 2 &&
      bounds.top >= 8
    );
  });
  expect(centered).toBe(true);
  await search.fill("centralgis");
  await page.keyboard.press("ArrowDown");
  await expect(dialog.getByRole("link", { name: "CentralGIS" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("button", { name: "Close search" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("link", { name: "CentralGIS" })).toBeFocused();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await search.fill("<script>alert(1)</script>");
  await expect(dialog.getByRole("status")).toHaveText("0 results");
  await expect(dialog.getByRole("link")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await page.keyboard.press("Meta+k");
  await expect(search).toBeFocused();
  await search.fill("centralgis");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/projects\/centralgis$/);
});

test("signal motion loads only when needed and respects reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const flow = page.getByRole("region", {
    name: "From raw data to useful products",
  });
  await flow.scrollIntoViewIfNeeded();
  await expect(flow.getByRole("link")).toHaveCount(6);
  await expect(page.locator("[data-signal]")).toHaveCount(0);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator("[data-signal]")).toHaveCount(1);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("[data-signal]")).toHaveCount(0);
  await flow.getByRole("link", { name: /Ingest/ }).click();
  await expect(page).toHaveURL(/#data-engineering-heading$/);
  await expect(
    page.getByRole("heading", { name: "Data engineering", exact: true }),
  ).toBeInViewport();
});

test("project pages reflow at narrow, tablet, desktop, and zoom-equivalent widths", async ({
  page,
}, testInfo) => {
  for (const width of [320, 375, 400, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/projects/ai-sandbox?view=engineer");
    await expect(
      page.getByRole("list", { name: "System components", exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth,
      ),
    ).toBe(true);
    if (
      testInfo.project.name === "chromium" &&
      [375, 768, 1440, 1920].includes(width)
    ) {
      await page.screenshot({
        path: testInfo.outputPath(`project-${width}.png`),
        fullPage: true,
        animations: "disabled",
      });
    }
  }
});

test("production metadata, social card and security headers are available", async ({
  page,
  request,
}) => {
  const response = await page.goto("/");
  const headers = response!.headers();
  expect(headers["content-security-policy"]).toContain(
    "frame-ancestors 'none'",
  );
  expect(headers["content-security-policy"]).toContain("object-src 'none'");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("DENY");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /^https?:\/\/.+\/?$/,
  );
  const person = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(JSON.parse(person!)).toMatchObject({
    "@type": "Person",
    name: "Abdessamad Jaouad",
  });
  const social = await request.get("/opengraph-image");
  expect(social.status()).toBe(200);
  expect(social.headers()["content-type"]).toContain("image/png");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("/projects/ai-sandbox");
  expect(await sitemap.text()).not.toContain("design-lab");
  expect((await request.get("/robots.txt")).status()).toBe(200);
});
