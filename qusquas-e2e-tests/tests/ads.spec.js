import { test, expect } from "@playwright/test";

test("Logged-in user can create an ad", async ({ page }) => {
  await page.goto("https://www.qusaqus.com/login");

  await page.fill('input[type="email"]', "testuser@mail.com");
  await page.fill('input[type="password"]', "Password123");
  await page.click('button[type="submit"]');

  await page.goto("https://www.qusaqus.com/post-ad");

  await page.fill('input[name="title"]', "Automation Test Ad");
  await page.fill(
    'textarea[name="description"]',
    "This ad was created by automated test"
  );
  await page.click('button[type="submit"]');

  await expect(page.locator("text=success")).toBeVisible();
});
