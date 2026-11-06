import { defineConfig, devices } from "@playwright/test";

// End-to-end tests run against the real site in a browser.
export default defineConfig({
  testDir: "./e2e",
  use: {
    baseURL: "http://localhost:3000",
  },
  // Starts the dev server before the tests (or reuses one that is already running).
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});