import { test, expect } from '@playwright/test';

test("Click Activity", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();

    const SubmitBtn = page.locator('button.submit-btn');
    await SubmitBtn.click();

    const result = page.locator('div#result');

    // console.log(await result.innerText()); // only data without empty spaces
    // console.log(await result.textContent());  // only data with empty spaces

    await page.close();

});