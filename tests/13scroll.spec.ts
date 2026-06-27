import { test, expect } from '@playwright/test';

test( "Handling scroll", async ( { page } ) => {

    await page.goto( 'https://testautomationpractice.blogspot.com/' );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause()

    const uploadFileBtn = page.getByRole( 'button', { name: 'Upload Single File' } );

    // await uploadFileBtn.scrollIntoViewIfNeeded();

    // mouse
    // await page.mouse.wheel( 0, 1000 ); // to scroll the page up
    // await page.mouse.wheel( 0, -500 );// to scroll the page down


    await page.close();

} );