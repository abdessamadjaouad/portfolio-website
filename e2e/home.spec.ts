import { expect, test } from "@playwright/test";

test("renders the portfolio foundation without browser errors", async ({
  page,
}) => {
  const browserErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      browserErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    browserErrors.push(error.message);
  });

  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  expect(response?.headers()["x-powered-by"]).toBeUndefined();
  await expect(page).toHaveTitle("Abdessamad Jaouad | Data Engineer");
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
    "content",
    "#071015",
  );
  await expect(
    page.getByRole("heading", { level: 1, name: "Abdessamad Jaouad" }),
  ).toBeVisible();
  await expect(
    page.getByText("Data Engineer · Software Engineer"),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    ),
  ).toBe(false);
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).colorScheme,
    ),
  ).toBe("dark");
  expect(browserErrors).toEqual([]);
});
