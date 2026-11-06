import { test, expect } from "@playwright/test";

// Phone-sized screen, so the mobile menu is shown instead of the desktop links.
test.use({ viewport: { width: 390, height: 844 } });

test("mobile menu opens, shows the links, and closes after choosing one", async ({ page }) => {
  await page.goto("/");

  const openButton = page.getByRole("button", { name: "Open menu" });
  await expect(openButton).toHaveAttribute("aria-expanded", "false");

  await openButton.click();

  const menu = page.locator("#mobile-menu");
  await expect(menu).toBeVisible();
  await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");

  for (const label of ["About", "Projects", "Skills", "Contact"]) {
    await expect(menu.getByRole("link", { name: label })).toBeVisible();
  }

  await menu.getByRole("link", { name: "Projects" }).click();

  await expect(menu).toBeHidden();
  await expect(page).toHaveURL(/#projects$/);
});