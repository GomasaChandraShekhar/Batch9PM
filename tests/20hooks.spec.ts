import { test, chromium, Browser, BrowserContext, Page } from '@playwright/test';


let browser: Browser;
let context: BrowserContext;
let page: Page;


test( "Test 1", async ( { page } ) => {

    // console.log( "Test 1" );

} );


test( "Test 2", async ( { page } ) => {

    // console.log( "Test 2" );

} );
test.fail( "Test 3", async ( { page } ) => {

    // console.log( "Test 3" );

} );

test.beforeAll( "BeforeAll", async () => {
    // console.log( "BeforeAll" );
    browser = await chromium.launch();

} );


test.afterAll( "AfterAll", async () => {
    // console.log( "AfterAll" );
    await browser.close();
} );

test.beforeEach( "BeforeEach", async ( { page } ) => {
    // console.log( 'Before Each' );
    context = await browser.newContext();
    page = await context.newPage();

    // await page.goto( 'https://playwright.dev/' );

} );

test.afterEach( "AfterEach", async ( { page } ) => {
    // console.log( 'AfterEach' );
    await page.close();
    await context.close();

} );

