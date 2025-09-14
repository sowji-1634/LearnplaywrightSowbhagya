import { test, expect } from '@playwright/test';

test('add employee in ornageHrm with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  
  
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  
  await page.getByRole('textbox', { name: 'First Name' }).fill('sowbhagya');
  
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('b');
  
  await page.getByRole('textbox', { name: 'Last Name' }).fill('b');

  await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("0987");
  await page.locator("//input[@type='file']").setInputFiles("testdata/uploadImage/background.jpg");
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 60000 });
});