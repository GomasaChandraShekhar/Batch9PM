import { test } from '@playwright/test';

test( "ShadowDOM", async ( { page } ) => {

    await page.goto( 'https://selectorshub.com/xpath-practice-page/' );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause();

    const shadowDom = page.locator( 'div#userName' );
    await shadowDom.locator( '#kils' ).fill( 'Playwright' );

    const shadowDom2 = page.locator( 'div#app2' );
    await shadowDom2.locator( '#pizza' ).fill( 'Pizza' );


    await page.close();
} );