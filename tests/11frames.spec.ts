import { test, expect, type Locator } from '@playwright/test';

test.skip("Handling Frames", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const iframe = page.frameLocator('iframe#singleframe');

    await iframe.locator('//input[@type="text"]').fill('Playwright');

    await page.close();

});

test("Handling Nested Frames", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const frame = page.frame({ url: 'https://the-internet.herokuapp.com/frame_top' });
    // const frame = page.frame({ name: 'frame-top' });
    // const frame = page.frame('frame-top');

    const frames = frame?.childFrames();

    const leftText = await frames?.at(0)?.getByText('LEFT').innerText();
    console.log(leftText);

    const middleText = await frames?.at(1)?.locator('div#content').innerText();
    console.log(middleText);

    await page.close();

});

