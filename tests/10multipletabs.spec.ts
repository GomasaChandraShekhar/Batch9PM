import { test, expect, type Locator } from '@playwright/test';

test.skip("Handling Single Tabs", async ({ page, context }) => {

    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const parentPageTitle: string = await page.title();
    console.log("Parent Page Title is :: ", parentPageTitle);

    const newTabbedWindow = page.getByText('Open New Tabbed Windows');
    const newSeperateWindow = page.getByText('Open New Seperate Windows');
    const clickBtn = page.getByRole('button', { name: 'click' });

    await newTabbedWindow.click();

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            clickBtn.click()
        ]
    );

    const childPageTitle: string = await newPage.title();
    console.log("Child Page Title is :: ", childPageTitle);


    await page.bringToFront(); // activate the page
    await expect.soft(clickBtn).toBeVisible();

    await newPage.bringToFront(); // activate the newPage
    if (childPageTitle == 'Selenium') {
        await newPage.close();
    }

    await page.bringToFront(); // activate the page
    await page.close();

});


test.skip("Handling Seperate Window", async ({ page, context }) => {

    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const parentPageTitle: string = await page.title();
    console.log("Parent Page Title is :: ", parentPageTitle);

    const newSeperateWindow = page.getByText('Open New Seperate Windows');
    const clickBtn = page.getByRole('button', { name: 'click' });

    await newSeperateWindow.click();

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            clickBtn.click()
        ]
    );

    const childPageTitle: string = await newPage.title();
    console.log("Child Page Title is :: ", childPageTitle);


    await page.bringToFront(); // activate the page
    await expect.soft(clickBtn).toBeVisible();

    await newPage.bringToFront(); // activate the newPage
    if (childPageTitle == 'Selenium') {
        await newPage.close();
    }

    await page.bringToFront(); // activate the page
    await page.close();

});



test("Handling Seperate Multiple Windows", async ({ page, context }) => {

    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const parentPageTitle: string = await page.title();
    console.log("Parent Page Title is :: ", parentPageTitle);

    const newSeperateWindows: Locator = page.getByText('Open Seperate Multiple Windows');
    const clickBtn: Locator = page.getByRole('button', { name: 'click' });

    await newSeperateWindows.click();

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            clickBtn.click()
        ]
    );

    await page.waitForTimeout(4000);
    const pages = context.pages();
    // console.log(pages.length); // 3
    // console.log(await pages[0].title());
    // console.log(await pages[1].title());
    // console.log(await pages[2].title());

    await page.bringToFront(); // activate the page
    await expect.soft(clickBtn).toBeVisible();

    await pages[1].bringToFront(); // activate the newPage
    if (await pages[1].title() == 'Index') {
        await expect.soft(pages[1].locator('input#email')).toBeVisible();
        await pages[1].close();
    }

    await pages[2].bringToFront();
    if (await pages[2].title() == 'Selenium') {
        await expect.soft(pages[2].locator('svg#Layer_1')).toBeVisible();
        await pages[2].close();
    }

    await page.bringToFront(); // activate the page
    await page.close();



});




