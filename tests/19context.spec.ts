import { test, chromium } from '@playwright/test';

test( "Context", async () => {

    const browser = await chromium.launch( { headless: false } );

    const context = await browser.newContext(
        {
            // viewport: { width: 1500, height: 700 },
            // ignoreHTTPSErrors: true , 
            // proxy: {
            //     server: 'http://myproxy.com:3128',
            //     bypass: '.com',
            //     username: 'username',
            //     password:'password'
            // },
        } );
    /*
    await context.addCookies(
    [
        {
            name: '_ga',
            value: 'GA1.1.1839579744.1778730043',
            domain: '.rahulshettyacademy.com',
            path: '/'
            },
            {
                name: 'practice_name',
                value: 'Chandra Shekhar',
                domain: '.rahulshettyacademy.com',
                path: '/'
            },
            {
                name: 'practice_email',
                value: 'gomasachandrashekhar@gmail.com',
                domain: '.rahulshettyacademy.com',
                path: '/'
            }
        ]
    );
    

    const cookies = await context.cookies();

    console.log( cookies.length );
    
    for ( const cookie of cookies ) {
        console.log(cookie);
    }
    */

    const page = await context.newPage();

    await page.goto( 'https://www.google.com/' );
    
    await page.pause();

    await page.close();

} );