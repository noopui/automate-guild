import { test, expect } from '@playwright/test';

test.describe('Log in', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      // await expect(page).toHaveURL('https://automationexercise.com/');

    })

    test('log in to system successfully', async ({ page }) => {
        // Verify that lable is Signup / Log in
        const labelLink = await page.getByRole('link', { name: 'login' });
        await expect(labelLink).toHaveText(' Signup / Login');
        await labelLink.click();

        // Verify that Login to your account' is visible
        const labelLogin = await page.getByText('Login to your account');
        await expect(labelLogin).toContainText('Login to your account');

        // input email
        const email = 'Test02@abc.com';
        await page.getByTestId('login-email').fill(email);
        //await page.getByPlaceholder('Email Address').fill(email);

        // input password
        const password = 'Test1234';
        await page.getByPlaceholder('Password').fill(password);

        //click log in
        const loginButton = await page.getByTestId('login-button');
        await loginButton.click();

        // Verify that logged account is showing
        const nameLabel = 'Test02'
        await expect(page.getByText(nameLabel)).toBeVisible();
    })


       

})