import { test, expect } from '@playwright/test';

test("Handling Scroll", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();

    const sundayCb = page.locator('input#sunday');

    await sundayCb.scrollIntoViewIfNeeded();

    // await sundayCb.hover();

    // await page.mouse.wheel(0, 1000);
    // await page.mouse.wheel(0, -500);

    await sundayCb.check();
    await expect.soft(sundayCb).toBeChecked();



    await page.close();

});