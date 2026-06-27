import { expect, test } from '@playwright/test';


test.describe( "Grouping", async () => {

    test( "Key Board Actions 1", async ( { page, context } ) => {

        await page.goto( 'https://testautomationpractice.blogspot.com/' );
        await page.pause();

        const userNameField = page.locator( '#name' );
        const emailField = page.locator( '#email' );
        const PPLink = page.getByRole( 'link', { name: 'PlaywrightPractice' } );

        await userNameField.pressSequentially( 'Playwright', { delay: 1000 } );
        await userNameField.press( 'Control+a', { delay: 500 } );
        await userNameField.press( 'Control+c', { delay: 500 } );
        await emailField.press( 'Control+v', { delay: 500 } );

        await PPLink.hover();
        // const [ newPage ] = await Promise.all(
        //     [
        //         context.waitForEvent( 'page' ),
        //         PPLink.press( 'Control+Enter' )
        //     ]
        // );
        // await page.waitForTimeout( 3000 );
        // const pages = context.pages();
        // console.log( pages.length ); // 2

        await expect.soft( PPLink ).not.toBeVisible();


        await page.close();

    } );

    test( "Key Board Actions 2", async ( { page, context } ) => {

        await page.goto( 'https://testautomationpractice.blogspot.com/' );
        // await page.pause();

        const userNameField = page.locator( '#name' );
        const emailField = page.locator( '#email' );
        const PPLink = page.getByRole( 'link', { name: 'PlaywrightPractice' } );

        await userNameField.pressSequentially( 'Playwright', { delay: 1000 } );
        await userNameField.press( 'Control+a', { delay: 500 } );
        await userNameField.press( 'Control+c', { delay: 500 } );
        await emailField.press( 'Control+v', { delay: 500 } );

        await PPLink.hover();
        const [ newPage ] = await Promise.all(
            [
                context.waitForEvent( 'page' ),
                PPLink.press( 'Control+Enter' )
            ]
        );
        await page.waitForTimeout( 3000 );
        const pages = context.pages();
        console.log( pages.length ); // 2


        await page.close();

    } );

} );

test( "Other activity", async ( { page } ) => {
    await page.goto( 'https://testautomationpractice.blogspot.com/' );
    // await page.pause();

    const userNameField = page.locator( '#name' );
    const emailField = page.locator( '#email' );
    const PPLink = page.getByRole( 'link', { name: 'PlaywrightPractice' } );

    await userNameField.fill( 'Playwright' );



} );
