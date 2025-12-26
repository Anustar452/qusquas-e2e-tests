import { test, expect } from "@playwright/test";

test("Homepage loads successfully", async ({ page }) => {
  await page.goto("https://www.qusaqus.com/");
  await expect(page).toHaveTitle(/Qusaqus/i);
});

test("Login page is accessible", async ({ page }) => {
  await page.goto("https://www.qusaqus.com/login");
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('input[type="password"]')).toBeVisible();
});

test("Register page is accessible", async ({ page }) => {
  await page.goto("https://www.qusaqus.com/register");
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('input[type="password"]')).toBeVisible();
});

test("Post Ad button is visible on homepage", async ({ page }) => {
  await page.goto("https://www.qusaqus.com/");
  await expect(page.locator("text=Post")).toBeVisible();
});
