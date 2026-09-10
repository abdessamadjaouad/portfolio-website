import { defineConfig, devices } from "@playwright/test";

delete process.env.NO_COLOR;

const port = 3100;
const baseURL = process.env.PLAYWRIGHT_BASE_URL || `http://127.0.0.1:${port}`;
const production = process.env.PLAYWRIGHT_PRODUCTION === "1";
const functionalTestIgnore = [
  "**/performance.spec.ts",
  ...(production ? ["**/design-lab.spec.ts"] : []),
];

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: process.env.CI ? [["line"], ["html", { open: "never" }]] : "line",
  outputDir: "test-results",
  use: {
    baseURL,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      testIgnore: functionalTestIgnore,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      testIgnore: functionalTestIgnore,
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      testIgnore: functionalTestIgnore,
      use: {
        ...devices["Desktop Safari"],
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_WEBKIT_EXECUTABLE_PATH,
        },
      },
    },
    {
      name: "mobile",
      testIgnore: functionalTestIgnore,
      use: { ...devices["Pixel 5"], viewport: { width: 375, height: 812 } },
    },
    {
      name: "performance",
      outputDir: "test-results/performance",
      testMatch: "**/performance.spec.ts",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: `npm run ${production ? "start" : "dev"} -- --hostname 127.0.0.1 --port ${port}`,
        url: baseURL,
        reuseExistingServer: !process.env.CI && !production,
        env: { SITE_URL: baseURL, NEXT_TELEMETRY_DISABLED: "1" },
        timeout: 120_000,
      },
});
