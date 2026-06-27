import { test, expect } from '@playwright/test';


test.skip("Handling date picker", async ({ page }) => {

    let date = '28';
    let month = 'August';
    let year = '2026';

    // await page.goto("https://jqueryui.com/datepicker/");
    await page.goto('https://jqueryui.com/datepicker/#other-months');
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const frame = page.frameLocator('.demo-frame');
    const dateField = frame.locator('#datepicker');
    const prevButton = frame.locator('//a[@title="Prev"]');
    const nextButton = frame.getByText('Next');
    const monthText = frame.locator('//span[@class="ui-datepicker-month"]');
    const yearText = frame.locator('//span[@class="ui-datepicker-year"]');
    const dateValue = frame.locator(`//a[@class="ui-state-default" and text()="${date}"]`);

    await dateField.click();
    await expect(nextButton).toBeVisible();

    let flag = true;
    while (flag) {
        if (await yearText.innerText() > year || await yearText.innerText() === year) {
            if (await monthText.innerText() === month && await yearText.innerText() === year) {
                await dateValue.click();
                flag = false;
            }
            else {
                await prevButton.click();
            }
        }
        else {
            if (await monthText.innerText() === month && await yearText.innerText() === year) {
                await dateValue.click();
                flag = false;
            }
            else {
                await nextButton.click();
            }
        }
    }

    await page.close();

});


test("Handling multiple Months Date Picker", async ({ page }) => {

    let date: string = '25';
    let month: string = 'November';
    let year: string = '2025';

    await page.goto('https://jqueryui.com/datepicker/#multiple-calendars');

    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const frame = page.frameLocator('iframe.demo-frame');
    const dateField = frame.locator('input#datepicker');

    const firstMonth = frame.locator('//div[@class="ui-datepicker-group ui-datepicker-group-first"]');
    const middleMonth = frame.locator('//div[@class="ui-datepicker-group ui-datepicker-group-middle"]');
    const lastMonth = frame.locator('//div[@class="ui-datepicker-group ui-datepicker-group-last"]');

    // const firstdateValue = firstMonth.locator(`//a[@class="ui-state-default" and text()="${date}"]`);
    // const middledateValue = middleMonth.locator(`//a[@class="ui-state-default" and text()="${date}"]`);
    // const lastdateValue = lastMonth.locator(`//a[@class="ui-state-default" and text()="${date}"]`);

    const firstdateValue = firstMonth.locator(`a.ui-state-default`).filter({ hasText: `${date}` });
    const middledateValue = middleMonth.locator(`a.ui-state-default`).filter({ hasText: `${date}` });
    const lastdateValue = lastMonth.locator(`a.ui-state-default`).filter({ hasText: `${date}` });

    const prevButton = firstMonth.locator('//a[@title="Prev"]');
    const nextButton = lastMonth.locator('//a[@title="Next"]');

    const firstMonthText = firstMonth.locator('//span[@class="ui-datepicker-month"]');
    const middleMonthText = middleMonth.locator('//span[@class="ui-datepicker-month"]');
    const lastMonthText = lastMonth.locator('//span[@class="ui-datepicker-month"]');

    const firstYearText = firstMonth.locator('//span[@class="ui-datepicker-year"]');
    const middleYearText = middleMonth.locator('//span[@class="ui-datepicker-year"]');
    const lastYearText = lastMonth.locator('//span[@class="ui-datepicker-year"]');

    await dateField.click();
    await expect.soft(firstYearText).toBeVisible();

    let flag = true;
    while (flag) {

        if (await firstYearText.innerText() > year || await firstYearText.innerText() === year) {
            if (await firstMonthText.innerText() === month && await firstYearText.innerText() === year) {
                await firstdateValue.click();
                flag = false;
            }
            else {
                await prevButton.click();
            }
        }
        else {
            if (await firstMonthText.innerText() === month && await firstYearText.innerText() === year) {
                await firstdateValue.click();
                flag = false;
            }
            else if (await middleMonthText.innerText() === month && await middleYearText.innerText() === year) {
                await middledateValue.click();

                flag = false;
            }
            else if (await lastMonthText.innerText() === month && await lastYearText.innerText() === year) {
                await lastdateValue.click();
                flag = false;
            }
            else {
                await nextButton.click();
            }
        }

    }

    await page.close();

});


