import { test } from '@playwright/test';


test("Handling web table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const table = page.locator('table#productTable');

    // const headers = await table.locator('th').all();
    // for (const header of headers) {
    //     console.log(await header.innerText());
    // }

    const rows = await table.locator('tbody tr').all();

    const pages = await page.locator('ul#pagination li a').all();
    await table.scrollIntoViewIfNeeded();
    for (const page of pages) {
        await page.click();

        for (const row of rows) {
            const columns = row.locator('td');

            // const count = await columns.count();
            const text = await columns.nth(1).innerText();
            if (text === "Smartphone" || text === "Smartwatch"
                || text === "Bluetooth Speaker" || text === "Desktop Computer"
                || text === "Soundbar") {
                await columns.nth(3).locator('input').check();
            }

        }

    }


});