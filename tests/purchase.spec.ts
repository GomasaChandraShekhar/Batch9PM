import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import ReadFiles from '../utils/ReadFiles';
import PageObjectManager from '../pages/PageObjectManager';

// const loginData = [
//     [ 'ZARA COAT 3','splaywright@gmail.com', 'Gomasa@1988' ],
//     [ 'IPHONE 13 PRO', 'splaywright@gmail.com', 'Gomasa@1988' ],
//     [ 'ADIDAS ORIGINAL', 'splaywright@gmail.com', 'Gomasa@1988' ]
// ];

// const jsonFilePath: any = fs.readFileSync( "./testdata/PlaceOrder.json", 'utf-8' );
// const loginData: any = JSON.parse(jsonFilePath);
// const csvFilePath = fs.readFileSync("./testdata/PlaceOrder.csv", 'utf-8');
// const loginData: any = parse(csvFilePath, {skip_empty_lines: true, columns: true});
const excelFilePath = fs.readFileSync( "testdata/PlaceOrder.xlsx", 'utf-8' );

const readFiles = new ReadFiles();
const loginData: any = readFiles.readJsonFile("./testdata/PlaceOrder.json");
// const loginData: any = readFiles.readCsvFile(csvFilePath);
// const loginData: any = readFiles.readExcelFile( "./testdata/PlaceOrder.xlsx" );

let poManager: PageObjectManager;



for ( const { prodName, country } of loginData ) {

    // test.describe.configure({ mode: 'parallel' });
    
    test.describe( `Purchase Product ${prodName}`, () => {

        test.beforeEach( async function (  {page}  ) {
            poManager = new PageObjectManager( page );
            await poManager.loginPage.goto( poManager.testConfig.url );
        } );

        
        test( `Place Order for the Product ${prodName}`, async ( {page}) => {

            const emailField = page.locator( 'input#userEmail' );
            const pswdField = page.locator( 'input#userPassword' );
            const loginBtn = page.locator( 'input#login' );
            const message = page.locator( 'div#toast-container' );
            const signoutBtn = page.getByText( ' Sign Out ' );
            const products = page.locator( '//div[@class="card-body"]' );
            const homebtn = page.locator( 'button[routerlink*="/dashboard/"]' );
            const ordersbtn = page.locator( 'button[routerlink*="myorders"]' );
            const cartbtn = page.locator( 'button[routerlink*="cart"]' );
            const checkoutBtn = page.getByText( 'Checkout' );
            const countryDrp = page.getByPlaceholder( 'Select Country' );
            const countryOptions = page.locator( 'span.ng-star-inserted' );
            const placeOrderBtn = page.locator( '//a[text()="Place Order "]' );
            const orderIdText = page.locator( 'label.ng-star-inserted' );
            const ordersTable = page.locator( 'table.ng-star-inserted' );
            const rows = ordersTable.locator( 'tbody tr' );
            const orderIdCol = rows.first().locator( 'th' );
            const viewBtn = rows.first().getByText( 'View' );

            // await emailField.fill( testConfig.userEmail );
            // await pswdField.fill( testConfig.userPassword );
            // await loginBtn.click();

            await poManager.loginPage.login( poManager.testConfig.userEmail, poManager.testConfig.userPassword );

            // await expect.soft( message ).toBeVisible();
            // console.log( await message.innerText() );
            await page.waitForTimeout( 3000 );

            // for ( const prod of await products.all() ) {
            //     const ProductName = await prod.locator( 'b' ).innerText();
            //     if ( ProductName == prodName ) {
            //         await prod.getByText( ' Add To Cart' ).click();
            //         break;
            //     }
            // }
            poManager.cartPage.addProdToCart( prodName );

            // await expect.soft( message ).toBeVisible();

            await cartbtn.click();

            await expect.soft( checkoutBtn ).toBeVisible();
            await checkoutBtn.click();

            await countryDrp.pressSequentially( country );
            await countryOptions.last().click();

            await placeOrderBtn.click();
            const orderId = ( await orderIdText.innerText() ).replaceAll( '|', '' ).trim();
            console.log( orderId );
            await ordersbtn.click();

            const orderIdFromTable = await orderIdCol.first().innerText();

            if ( orderId == orderIdFromTable ) {
                await viewBtn.click();
            }


            await expect.soft( signoutBtn ).toBeVisible();


        } );

        test.afterEach( async function () {
            await poManager.loginPage.signOut()
        } );

    } );


}