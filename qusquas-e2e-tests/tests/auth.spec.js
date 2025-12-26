import { test, expect } from "@playwright/test";

test("User can login with valid credentials", async ({ page }) => {
  await page.goto("https://www.qusaqus.com/login");

  await page.fill('input[type="email"]', "testuser@mail.com");
  await page.fill('input[type="password"]', "Password123");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard|profile/i);
});

test("Invalid login shows error message", async ({ page }) => {
  await page.goto("https://www.qusaqus.com/login");

  await page.fill('input[type="email"]', "wrong@mail.com");
  await page.fill('input[type="password"]', "wrongpass");
  await page.click('button[type="submit"]');

  await expect(page.locator(".error, .alert")).toBeVisible();
});
