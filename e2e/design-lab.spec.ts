import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

function monitorBrowserErrors(page: Page) {
  const errors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    errors.push(error.message);
  });

  return errors;
}

test("renders all design directions and the approved foundation", async ({
  page,
}) => {
  const browserErrors = monitorBrowserErrors(page);
  const response = await page.goto("/design-lab");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", { level: 1, name: "Systems Atlas Design Lab" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Signal Ledger",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Field Notes" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Modular Current" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Signal Ledger Foundations",
    }),
  ).toBeVisible();
  await expect(page.getByText("40%", { exact: true })).toHaveCount(4);

  const emailActions = page.getByRole("link", { name: "Email Abdessamad" });
  await expect(emailActions).toHaveCount(4);
  await expect(emailActions.last()).toHaveAttribute(
    "href",
    "mailto:abdessamadjaouad0@gmail.com",
  );

  const githubLinks = page.getByRole("link", { name: /GitHub profile/ });
  await expect(githubLinks.last()).toHaveAttribute("target", "_blank");
  await expect(githubLinks.last()).toHaveAttribute(
    "rel",
    "noopener noreferrer",
  );
  expect(browserErrors).toEqual([]);
});

test("supports skip navigation and visible keyboard focus", async ({
  page,
}) => {
  await page.goto("/design-lab");

  const skipLink = page.getByRole("link", {
    name: "Skip to design directions",
  });
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();

  const emailAction = page
    .getByRole("link", { name: "Email Abdessamad" })
    .last();
  await emailAction.focus();
  await expect(emailAction).toBeFocused();
  expect(
    await emailAction.evaluate(
      (element) => getComputedStyle(element).outlineStyle,
    ),
  ).toBe("solid");
  expect(
    await emailAction.evaluate(
      (element) => element.getBoundingClientRect().height,
    ),
  ).toBeGreaterThanOrEqual(44);
});

test("reflows without horizontal overflow at approved widths", async ({
  page,
}) => {
  const viewports = [
    { width: 375, height: 812 },
    { width: 768, height: 1024 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/design-lab");
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Signal Ledger",
        exact: true,
      }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      ),
    ).toBe(false);
  }
});

test("keeps every direction visible with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/design-lab");

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Signal Ledger",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Field Notes" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Modular Current" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Signal Ledger Foundations",
    }),
  ).toBeVisible();
  expect(
    await page.getByRole("main").evaluate((element) => {
      const descendants = [element, ...element.querySelectorAll("*")];
      return descendants.some(
        (node) => getComputedStyle(node).animationName !== "none",
      );
    }),
  ).toBe(false);
});
