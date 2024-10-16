import { test, expect } from '@playwright/test';

test.describe('Sign in', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/login');
      //baseURL: 'https://the-internet.herokuapp.com',
      await expect(page.locator('.example').getByRole('heading').first()).toHaveText('Login Page');

    })

   
    test('log in to system successfully', async ({ page }) => {
        // input username
        const username = 'tomsmith';
        await page.locator('#username').fill(username);
    
      
        // input password
        const password = 'SuperSecretPassword!';
        await page.locator('#password').fill(password);
       

        //click log in
        await page.getByRole('button', { name: 'Login' }).click();


        // Verify that log in successfully message is showing
        await expect(page.getByText('You logged into a secure area!')).toBeVisible();

        // click log out
        await page.getByRole('link', { name: 'Logout' }).click();

        await expect(page.getByText('You logged out of the secure area!')).toBeVisible();


   })

   test('log in failed - password incorrect', async ({ page }) => {
    // input username
    const username = 'tomsmith';
    await page.locator('#username').fill(username);
  
    // input password
    const password = 'Password!';
    await page.locator('#password').fill(password);

    //click log in
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify that log in unsuccessfully message is showing
    await expect(page.getByText('Your password is invalid!')).toBeVisible();
  
   
    })

    test('log in failed - username not found', async ({ page }) => {
        // input username
        const username = 'tomholland';
        await page.locator('#username').fill(username);
      
        // input password
        const password = 'Password!';
        await page.locator('#password').fill(password);
    
        //click log in
        await page.getByRole('button', { name: 'Login' }).click();
    
        // Verify that log in unsuccessfully message is showing
        await expect(page.getByText('Your username is invalid!')).toBeVisible();
       
        })

    
       

})