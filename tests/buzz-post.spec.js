import { test, expect } from '@playwright/test';

test('Buzz post flow', async ({ page }) => {
  // 1. Navigate to the site
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // 2. Enter Username
  await page.fill('input[name="username"]', 'Admin');

  // 3. Enter Password
  await page.fill('input[name="password"]', 'Admin123');

  // 4. Click Login
  await page.click('button[type="submit"]');

  // 5. Click Buzz menu item
  await page.getByRole('link', { name: 'Buzz' }).click();

  // 6. Enter text in "Whats on your mind"
  const postText = 'Hello from Playwright!';
  await page.getByPlaceholder('What\'s on your mind?').fill(postText);

  // Click Post button
  await page.getByRole('button', { name: 'Post' }).click();

  // 7. Verify posted or not
  await expect(page.locator('.oxd-buzz-post .oxd-buzz-post-body')).toContainText(postText);
});