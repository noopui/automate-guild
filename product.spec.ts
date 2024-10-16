import { test, expect } from '@playwright/test';

test.describe('Product detail page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      // await expect(page).toHaveURL('https://automationexercise.com/');

       // go to product page
       await page.getByRole('link', { name: 'Products' }).click();

       // verify that user will navigate to All Products page
       await expect(page.getByRole('heading', { name: 'ALL PRODUCTS' })).toBeVisible();

        // click view product
        await page.locator('a[href="/product_details/1"]').click();


    })

    test('Verify that user will navigate to product detail page', async ({ page }) => {

         // verify that user see product name

         await expect(page.getByRole('heading', { name: 'Blue top' })).toBeVisible();

         //verify that user see product category
         await expect(page.locator('.product-information').getByRole('paragraph').first()).toBeVisible();
         //await expect(page.getByText('Category: Women > Tops')).toBeVisible();

         //verify that user see product product price
         await expect(page.getByText('Rs. 500')).toBeVisible();

         //verify that user see product product price
         await expect(page.getByText('In Stock')).toBeVisible();

         //verify that user see product condition
         await expect(page.getByText('New')).toBeVisible();

         //verify that user see product brand
         await expect(page.locator('.product-information').getByRole('paragraph').last()).toBeVisible();
         //await expect(page.getByText('Polo')).toBeVisible();


    })

    test('Verify that user add product to cart', async ({ page }) => {
        // click view product
        await page.getByRole('button', {name: 'Add to cart' }).click();
        await expect(page.getByRole('heading', { name: 'Added' })).toBeVisible();

        

   })

    

   
  



       

})