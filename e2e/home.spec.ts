import { test, expect } from "@playwright/test";

test("home page loads with the site title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Mohammad Nabi Noorzai/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Mohammad Nabi Noorzai");
});

test("hero buttons link to projects, contact, and the resume", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "View Projects" })).toHaveAttribute("href", "#projects");
  await expect(page.getByRole("link", { name: "Contact Me" })).toHaveAttribute("href", "#contact");

  const resume = page.getByRole("link", { name: "Download Resume" });
  await expect(resume).toHaveAttribute("href", "/Mohammad_Nabi_Noorzai_Resume.pdf");
  await expect(resume).toHaveAttribute("download", /.*/);
});

test("the resume PDF is served", async ({ request }) => {
  const response = await request.get("/Mohammad_Nabi_Noorzai_Resume.pdf");

  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("application/pdf");
});