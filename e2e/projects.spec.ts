import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "./fixtures";
import { caseStudies } from "../src/content/project-pages";

for (const path of [
  "/",
  "/projects",
  "/about",
  "/resume",
  "/research",
  ...caseStudies.map(({ slug }) => `/projects/${slug}`),
]) {
  test(`accessible server content and metadata: ${path}`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByText(/TODO_CONTENT_|private-inputs/)).toHaveCount(0);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /\S+/,
    );
    if (path.startsWith("/projects/"))
      await page.getByRole("button", { name: "Engineer detail" }).click();
    if (path === "/resume") {
      for (const summary of await page.locator("#experience summary").all()) {
        await summary.click();
      }
    }
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      audit.violations.map(({ id, nodes }) => ({
        id,
        elements: nodes.map(({ target }) => target),
      })),
    ).toEqual([]);
  });
}

test("project cards open the matching case study", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Explore AI Sandbox" }).click();
  await expect(page).toHaveURL(/\/projects\/ai-sandbox$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Sandbox",
  );
  await expect(
    page.getByText("DXC Technology Morocco / Internship"),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "My contribution" }),
  ).toBeVisible();
});

test("reading view survives refresh, sharing, back navigation, and preserves DOM state", async ({
  page,
}) => {
  await page.goto("/projects/centralgis?source=resume");
  const detail = page.locator("details[data-engineering-detail]");
  await expect(detail).not.toHaveAttribute("open", "");
  await page.getByRole("button", { name: "Engineer detail" }).click();
  await expect(page).toHaveURL(/source=resume&view=engineer$/);
  await expect(detail).toHaveAttribute("open", "");
  await detail.evaluate((element) =>
    element.setAttribute("data-state-test", "preserved"),
  );
  await page.getByRole("button", { name: "Recruiter overview" }).click();
  await expect(detail).not.toHaveAttribute("open", "");
  await expect(detail).toHaveAttribute("data-state-test", "preserved");
  await page.goBack();
  await expect(detail).toHaveAttribute("open", "");
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Engineer detail" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(detail).toHaveAttribute("open", "");
});

test("unknown project returns the helpful 404 page", async ({ page }) => {
  const response = await page.goto("/projects/not-a-project");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Page not found",
  );
  await page.getByRole("link", { name: "Back to the portfolio" }).click();
  await expect(page).toHaveURL("/");
});

test("every public page works without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });
  try {
    const page = await context.newPage();
    for (const path of [
      "/",
      "/projects",
      "/about",
      "/resume",
      "/research",
      ...caseStudies.map(({ slug }) => `/projects/${slug}`),
    ]) {
      expect((await page.goto(path))?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.getByRole("button", { name: /^Search/ })).toHaveCount(
        0,
      );
      if (path.startsWith("/projects/")) {
        await page
          .getByText("Explore the engineering details", { exact: true })
          .click();
        await expect(
          page.getByRole("list", { name: "System components", exact: true }),
        ).toBeVisible();
      }
    }
  } finally {
    await context.close();
  }
});
