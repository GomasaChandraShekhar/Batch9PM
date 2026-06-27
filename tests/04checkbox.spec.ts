import { test, expect } from '@playwright/test';

test("Handling Checkbox", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();

    const sundayCb = page.locator('input#sunday');
    const saturdayCb = page.locator('input#saturday');

    await sundayCb.check();
    await expect.soft(sundayCb).toBeChecked();

    await saturdayCb.check();
    await expect.soft(saturdayCb).toBeChecked();

    await sundayCb.uncheck();
    await expect.soft(sundayCb).not.toBeChecked();

    await saturdayCb.uncheck();
    await expect.soft(saturdayCb).not.toBeChecked();

    await page.close();

});