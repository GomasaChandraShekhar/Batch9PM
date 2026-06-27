import { test, expect } from '@playwright/test';

test("Handling Radio Button", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();

    const maleRb = page.locator('input#male');
    const femaleRb = page.locator('input#female');

    await femaleRb.check();

    // await expect.soft(maleRb).toBeChecked();
    await expect.soft(femaleRb).toBeChecked();

    await page.close();

});