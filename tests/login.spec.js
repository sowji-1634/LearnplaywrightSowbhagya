// @ts-check
import { test, expect } from '@playwright/test';

test('login with valid credential', async ({ page }) => {
 
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("//input[@placeholder='Username098']").fill("Admin")
await page.locator("//input[@placeholder='Password']").fill("admin123")

await page.locator("//button[@type='submit']").click()


//await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
//or

await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible
});

test('login with valid username and invalid pwd credential', async ({ page }) => {
 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin12309")
    await page.locator("//button[@type='submit']").click()
    
   
    
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible
    });

test('login with Invalid username valid pwd credential', async ({ page }) => {
 
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator("//input[@placeholder='Username']").fill("poooo")
        await page.locator("//input[@placeholder='Password']").fill("admin123")
        await page.locator("//button[@type='submit']").click()
        
       
        
        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible
        });

test('login with Invalid usrname and pwd credential', async ({ page }) => {
 
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            await page.locator("//input[@placeholder='Username']").fill("yuuhg")
            await page.locator("//input[@placeholder='Password']").fill("adm45tyy")
            await page.locator("//button[@type='submit']").click
            
           
            
            await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible
            });