import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

const resumeLinks = [
  {
    name: "Data Engineer resume",
    href: "/resumes/abdessamad-jaouad-data-engineer.pdf",
  },
  {
    name: "Software Engineer resume (PDF)",
    href: "/resumes/abdessamad-jaouad-software-engineer.pdf",
  },
] as const;

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

test("renders the complete résumé page without browser errors", async ({
  page,
}) => {
  const browserErrors = monitorBrowserErrors(page);
  const response = await page.goto("/resume");

  expect(response?.status()).toBe(200);
  expect(response?.headers()["x-powered-by"]).toBeUndefined();
  await expect(page).toHaveTitle("Résumé | Abdessamad Jaouad");
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute(
    "content",
    "#f5f3fa",
  );
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /Hello, I’m.*Abdessamad Jaouad/,
    }),
  ).toBeVisible();
  await expect(page.getByText("Data Engineer", { exact: true })).toBeVisible();
  await expect(page.getByText("Casablanca, Morocco").first()).toBeVisible();
  await expect(
    page.getByText("Available immediately", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 3, name: "DXC Technology Morocco" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "GitHub", exact: true }),
  ).toHaveAttribute("href", "https://github.com/abdessamadjaouad");
  await expect(
    page.getByRole("link", {
      name: "Abdessamad Jaouad on LinkedIn",
      exact: true,
    }),
  ).toHaveAttribute("href", "https://linkedin.com/in/abdessamadjaouad");
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Personal projects",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Tech stacks",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Experience",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Let’s connect",
    }),
  ).toBeVisible();
  await expect(page.getByRole("contentinfo")).toBeVisible();
  await expect(page.getByRole("form")).toHaveCount(0);
  await expect(page.getByText(/TODO_CONTENT_/)).toHaveCount(0);

  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).colorScheme,
    ),
  ).toBe("light");
  const portrait = page.getByRole("img", { name: "Abdessamad Jaouad" });
  await expect(portrait).toBeVisible();
  await expect
    .poll(() =>
      portrait.evaluate(
        (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
      ),
    )
    .toBe(true);
  expect(browserErrors).toEqual([]);
});

test("supports skip navigation", async ({ page }) => {
  await page.goto("/resume");

  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
});

test("supports logical keyboard order and visible focus", async ({ page }) => {
  await page.goto("/resume");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  const orderedLinks = [
    skipLink,
    page.getByRole("link", { name: "Email Abdessamad", exact: true }).first(),
    page.getByRole("link", { name: "Message Abdessamad on WhatsApp" }),
    page.getByRole("link", { name: "Abdessamad Jaouad on LinkedIn" }),
    page.getByRole("link", { name: "GitHub", exact: true }),
    page.getByRole("link", { name: "Contact me", exact: true }),
    page.getByRole("link", { name: "Data Engineer resume", exact: true }),
    page.getByRole("link", {
      name: "Software Engineer resume (PDF)",
      exact: true,
    }),
    page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link", { name: "Portfolio", exact: true }),
  ];

  for (const link of orderedLinks) {
    await page.keyboard.press("Tab");
    await expect(link).toBeFocused();
  }

  const primaryResume = page.getByRole("link", {
    name: "Data Engineer resume",
    exact: true,
  });
  await primaryResume.focus();
  expect(
    await primaryResume.evaluate(
      (element) => getComputedStyle(element).outlineStyle,
    ),
  ).toBe("solid");
  expect(
    await primaryResume.evaluate(
      (element) => element.getBoundingClientRect().height,
    ),
  ).toBeGreaterThanOrEqual(44);
});

test("keeps heading order, fragment links, and external destinations safe", async ({
  page,
}) => {
  await page.goto("/resume");

  const headingLevels = await page
    .getByRole("heading")
    .evaluateAll((headings) =>
      headings.map((heading) => Number(heading.tagName.slice(1))),
    );
  expect(headingLevels[0]).toBe(1);
  for (let index = 1; index < headingLevels.length; index += 1) {
    expect(headingLevels[index] - headingLevels[index - 1]).toBeLessThanOrEqual(
      1,
    );
  }

  const missingFragmentTargets = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
      .map((link) => link.hash)
      .filter((hash) => !document.querySelector(hash)),
  );
  expect(missingFragmentTargets).toEqual([]);

  const unsafeExternalLinks = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLAnchorElement>('a[href^="https://"]')]
      .filter(
        (link) =>
          link.target !== "_blank" ||
          !link.relList.contains("noopener") ||
          !link.relList.contains("noreferrer"),
      )
      .map((link) => link.href),
  );
  expect(unsafeExternalLinks).toEqual([]);

  const contactLinks = page
    .getByRole("list", { name: "Contact options" })
    .getByRole("link");
  await expect(contactLinks).toHaveCount(3);
  expect(
    await contactLinks.evaluateAll((links) =>
      links.map((link) => link.getAttribute("href")),
    ),
  ).toEqual([
    "mailto:abdessamadjaouad0@gmail.com",
    "https://wa.me/212679075431",
    "https://linkedin.com/in/abdessamadjaouad",
  ]);
});

test("exposes both reviewed resume downloads", async ({ page, request }) => {
  await page.goto("/resume");

  for (const resume of resumeLinks) {
    const link = page.getByRole("link", { name: resume.name, exact: true });
    await expect(link).toHaveAttribute("href", resume.href);
    await expect(link).toHaveAttribute("download", "");

    const response = await request.get(resume.href);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  }
});

test("reflows without horizontal overflow at approved widths and zoom equivalent", async ({
  page,
}, testInfo) => {
  const viewports = [
    { width: 320, height: 800 },
    { width: 375, height: 812 },
    { width: 400, height: 900 },
    { width: 768, height: 1024 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/resume");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Hello, I’m.*Abdessamad Jaouad/,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Data Engineer resume", exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      ),
    ).toBe(false);
    if (
      testInfo.project.name === "chromium" &&
      [375, 768, 1440, 1920].includes(viewport.width)
    ) {
      await page.screenshot({
        path: testInfo.outputPath(`home-${viewport.width}.png`),
        fullPage: true,
        animations: "disabled",
      });
    }
  }
});

test("keeps the full experience visible with reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/resume");

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Let’s connect",
    }),
  ).toBeVisible();

  const motionViolations = await page
    .locator("#top, #top *")
    .evaluateAll((elements) =>
      elements.flatMap((element) => {
        const styles = getComputedStyle(element);
        const hasAnimation =
          styles.animationName !== "none" &&
          styles.animationDuration
            .split(",")
            .some((duration) => Number.parseFloat(duration) > 0);
        const hasTransition = styles.transitionDuration
          .split(",")
          .some((duration) => Number.parseFloat(duration) > 0);

        return hasAnimation || hasTransition ? [element.tagName] : [];
      }),
    );
  expect(motionViolations).toEqual([]);
});

test.describe("without client JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("keeps core recruiter content and actions available", async ({
    page,
  }) => {
    const response = await page.goto("/resume");

    expect(response?.status()).toBe(200);
    const experience = page.locator("#experience-dxc-technology-morocco");
    await experience.locator("summary").click();
    await expect(
      experience.getByRole("link", { name: "Explore AI Sandbox" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Hello, I’m.*Abdessamad Jaouad/,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 3, name: "DXC Technology Morocco" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Data Engineer resume", exact: true }),
    ).toHaveAttribute("href", "/resumes/abdessamad-jaouad-data-engineer.pdf");
    await expect(
      page.getByRole("link", { name: "Email Abdessamad", exact: true }).first(),
    ).toHaveAttribute("href", "mailto:abdessamadjaouad0@gmail.com");
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Let’s connect",
      }),
    ).toBeVisible();
  });
});

test("experience disclosures support keyboard expansion and preserve official facts", async ({
  page,
}) => {
  await page.goto("/resume");
  const experience = page.locator("#experience-jesa");
  const summary = experience.locator("summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(experience).toHaveAttribute("open", "");
  await expect(
    experience.getByRole("link", { name: "Explore CentralGIS" }),
  ).toBeVisible();
  await expect(
    experience.getByText("CentralGIS reduced data access time by 40%.", {
      exact: true,
    }),
  ).toBeVisible();
  await page.keyboard.press("Space");
  await expect(experience).not.toHaveAttribute("open", "");
  await expect(summary).toBeFocused();
});

test("company logos load beside the matching experience", async ({ page }) => {
  await page.goto("/resume");
  for (const [experience, logo] of [
    ["dxc-technology-morocco", "dxc"],
    ["jesa", "jesa"],
    ["ocp-group", "ocp"],
  ]) {
    const image = page.locator(`#experience-${experience} summary img`);
    await image.scrollIntoViewIfNeeded();
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("src", new RegExp(`${logo}-logo`));
    await expect
      .poll(() =>
        image.evaluate(
          (element: HTMLImageElement) =>
            element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
});

test("résumé page is linked from the portfolio and returns to the homepage", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "Résumé", exact: true })
    .click();
  await expect(page).toHaveURL(/\/resume$/);
  await expect(
    page.getByRole("img", { name: "Abdessamad Jaouad" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Portfolio", exact: true }).click();
  await expect(page).toHaveURL("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "I build reliable data platforms and production software.",
  );
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).colorScheme,
    ),
  ).toBe("dark");
});
