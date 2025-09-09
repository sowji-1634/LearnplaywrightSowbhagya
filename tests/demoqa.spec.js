import { test, expect } from '@playwright/test';
import data from "../testdata/demoqa.json"

test('add employee in demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator("//h5[normalize-space(text())='Elements']").click()
  await page.locator("//span[normalize-space(text())='Text Box']").click()
    await expect(page).toHaveURL("https://demoqa.com/text-box")

  await page.locator("//input[@placeholder='Full Name']").fill(data.fullname)
await page.locator("#userEmail").fill(data.email)
await page.locator("#currentAddress").fill(data['current address'])
await page.locator("#permanentAddress").fill(data['permant address'])
await page.locator("#submit").click()

await expect(page.locator("#name")).toContainText(data.fullname)
 
});