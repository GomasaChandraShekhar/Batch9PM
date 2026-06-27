import { test, expect } from '@playwright/test';

test( "Handling Screenshot", async ( { page } ) => {

    await page.goto( 'https://demowebshop.tricentis.com/login' );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause()

    const registerBlock = page.locator('div.new-wrapper.register-block');

    // take screenshot of specific element
    await registerBlock.screenshot( {path: './screenshots/elementImgae.jpg'} );

    // screenshot of the visible area of the page
    await page.screenshot( { path: './screenshots/pageImage.jpg' } );

    // screenshot of the full the page
    await page.screenshot( { path: './screenshots/fullPageImage.jpg', fullPage: true } );

    expect( await page.screenshot( { path: './screenshots/fullPageImage.jpg', fullPage: true } ) )
        .toMatchSnapshot( { path: './screenshots/fullPageImage.jpg' });


    await page.close();

} );