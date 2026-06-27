import { test, expect } from '@playwright/test';

test.skip("Handling Simple Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const simpleAlert = page.getByText('Click for JS Alert');
    const result = page.locator('p#result');

    page.on('dialog', async (dialog) => {
        const messg = dialog.message();
        console.log('Alert message is :: ', messg);
        expect.soft(messg).toBe('I am a JS Alert');
        expect.soft(dialog.message()).toContain('I am a JS Alert');
        const type = dialog.type();
        console.log('Alert type is :: ', type);
        expect.soft(type).toBe('alert');
        expect.soft(dialog.type()).toContain('alert');
        await dialog.accept();
    });

    await simpleAlert.click();
    console.log(await result.innerText());

    await page.close();

});


test.skip("Handling Confirm Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const confirmAlert = page.getByText('Click for JS Confirm');
    const result = page.locator('p#result');

    page.on('dialog', async (dialog) => {
        const messg = dialog.message();
        console.log('Alert message is :: ', messg);
        expect.soft(messg).toBe('I am a JS Confirm');
        expect.soft(dialog.message()).toContain('I am a JS Confirm');
        const type = dialog.type();
        console.log('Alert type is :: ', type);
        expect.soft(type).toBe('confirm');
        expect.soft(dialog.type()).toContain('confirm');
        await dialog.accept();
        // await dialog.dismiss();
    });

    await confirmAlert.click();
    console.log(await result.innerText());

    await page.close();

});

test("Handling Prompt Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const promptAlert = page.getByText('Click for JS Prompt');
    const result = page.locator('p#result');

    page.on('dialog', async (dialog) => {
        const messg = dialog.message();
        console.log('Alert message is :: ', messg);
        expect.soft(messg).toBe('I am a JS prompt');
        expect.soft(dialog.message()).toContain('I am a JS prompt');
        const type = dialog.type();
        console.log('Alert type is :: ', type);
        expect.soft(type).toBe('prompt');
        expect.soft(dialog.type()).toContain('prompt');
        // await dialog.accept('Playwright');
        await dialog.dismiss();
    });

    await promptAlert.click();
    console.log(await result.innerText());

    await page.close();

});
