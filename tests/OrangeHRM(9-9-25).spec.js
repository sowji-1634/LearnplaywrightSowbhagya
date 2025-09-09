import { test, expect } from '@playwright/test';
import data from "../testdata/OrangeHRM(9-9-25).json"


test('add employee in OrangeHRM', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await expect(page.locator("//img[@alt='company-branding']")).toBeVisible()
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()
  await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()
  await page.locator("//button[contains(.,'Add')]").click()
  await expect(page.locator("//h6[text()='Add Employee']")).toBeVisible()
  await page.locator("//input[@placeholder='First Name']").fill(data['first name'])
  await page.locator("//input[@placeholder='Middle Name']").fill(data['middle name'])
  await page.locator("//input[@placeholder='Last Name']").fill(data['last name'])
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data["emp id"])
await page.locator("//button[@type='submit']").click()
await expect(page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")).toBeVisible({ timeout: 15000 });

 
});