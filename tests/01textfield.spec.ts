import { test, expect } from '@playwright/test';

test("Handling Text Field", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const nameField = page.getByRole('textbox', { name: 'Enter Name' });

    await nameField.fill("Playwright");
    const nameDataBefore = await nameField.inputValue();
    console.log('nameDataBefore :: ', nameDataBefore); // Playwright

    await nameField.clear();
    const nameDataAfter = await nameField.inputValue();
    console.log('nameDataAfter :: ', nameDataAfter); // 

    await page.close();

});