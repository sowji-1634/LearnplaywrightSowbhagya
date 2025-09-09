
import { test, expect } from '@playwright/test';

test('login with valid crendential', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator("//input[@placeholder='Username']").fill("standard_user")
  await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
  await page.locator("//input[@type='submit']").click()
  await expect(page.locator("//div[normalize-space(text())='Products']")).toBeVisible()

 
});

test('login with valid username and invalid pwd crendential', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator("//input[@placeholder='Username']").fill("standard_user")
  await page.locator("//input[@placeholder='Password']").fill("secret_sauce123")
  await page.locator("//input[@type='submit']").click()
  await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

 
});
test('login with invalid username and valid pwd crendential', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator("//input[@placeholder='Username']").fill("standard_user123")
  await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
  await page.locator("//input[@type='submit']").click()
  await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

 
});

test('login with invalid username and invalid pwd crendential', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator("//input[@placeholder='Username']").fill("standard_user123")
  await page.locator("//input[@placeholder='Password']").fill("secret_sauce123")
  await page.locator("//input[@type='submit']").click()
  await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

 
});