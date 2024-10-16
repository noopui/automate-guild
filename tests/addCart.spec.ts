import { test, expect } from '@playwright/test';

test.describe('Add product to cart', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      // await expect(page).toHaveURL('https://automationexercise.com/');

    })

    test('Verify that user can add product to cart', async ({ page }) => {
        // go to product page
        await page.getByRole('link', { name: 'Products' }).click();
       /* const linkProduct = await page.getByRole('link', { name: 'Products' });
        await linkProduct.click();*/

        // hover the 1st product
        //await page.locator('img[src="/get_product_picture/1"]').hover();

        // click add to cart
        await page.locator('.productinfo [data-product-id="1"]').click();
        await expect(page.getByRole('heading', { name: 'Added' })).toBeVisible();



     

       
    })


       

})