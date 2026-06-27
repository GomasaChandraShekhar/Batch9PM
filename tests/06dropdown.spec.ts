import { test } from '@playwright/test';

test.skip("Handling Single Selection Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.waitForTimeout(2000);

    // await page.pause();
    const countryDropdown = page.locator('select#country');

    await countryDropdown.selectOption({ value: 'australia' });
    console.log(await countryDropdown.inputValue());
    await countryDropdown.selectOption({ index: 1 });
    console.log(await countryDropdown.inputValue());
    await countryDropdown.selectOption('India');
    console.log(await countryDropdown.inputValue());

    // console.log(await countryDropdown.innerText()); // Only text data
    // console.log(await countryDropdown.allInnerTexts()); // Only text data
    // console.log(await countryDropdown.textContent()); // all text data with empty space
    // console.log(await countryDropdown.allTextContents()); // all text data with empty space

    const options = page.locator('select#country option');

    console.log(await options.count());  // 10

    for (const option of await options.all()) {
        console.log(await option.innerText());
    }

});


test.skip("Auto Suggestions", async ({ page }) => {

    await page.goto("https://www.google.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    await page.locator('textarea#APjFqb.gLFyf').fill('Playwright');

    const options = page.locator('ul.G43f7e li');
    await options.nth(2).click();

    // const elements = await options.all();

    // for (const element of elements) {
    //     const textData = await element.innerText();
    //     console.log(textData);
    //     if (textData == "playwright automation") {
    //         await element.click();
    //         break;
    //     }
    // }



});

test("Handling Multi Selection Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    await page.pause();

    // const colorsDropdown = page.locator('select#colors');

    // const colorsDropdown = page.getByRole('listbox', { name: 'Colors:' });

    // await colorsDropdown.selectOption(['Red', 'Green', 'White']);

    const animalsDrp = page.getByRole('listbox', { name: 'Sorted List:' });

    await animalsDrp.selectOption(['Cat', 'Dog', 'Fox']);


    await page.close();

});