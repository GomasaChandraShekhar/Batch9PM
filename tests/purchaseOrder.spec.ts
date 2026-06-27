import { test, expect } from '@playwright/test';
import ReadFiles from '../utils/ReadFiles';
import PageObjectManager from '../pages/PageObjectManager';

let readFiles = new ReadFiles();
let poManager: PageObjectManager;
let orderId: string;
const testData: any = readFiles.readCsvFile('./testData/PlaceOrder.csv');

for (const { prodName, country } of testData) {

    test.describe.configure({ mode: 'serial' });

    test.describe(`Place Order ${prodName}`, () => {

        test.beforeEach(async ({ page }) => {
            poManager = new PageObjectManager(page);
            await page.goto(poManager.testConfig.url);
            await page.waitForTimeout(3000);
            await poManager.loginPage.login(poManager.testConfig.userEmail, poManager.testConfig.userPassword);
            expect.soft('Login Success').toContain('');
        });

        test(`Place Order for ${prodName} Verigy through History`, async () => {
            await poManager.cartPage.addProdToCart(prodName);
            await poManager.cartPage.navigateToCart();
            await poManager.placeOrderPage.placeOrder(country);
            orderId = await poManager.placeOrderPage.getOrderId();
            await poManager.placeOrderPage.clickOrderHistoryLink();
            await poManager.placeOrderPage.verifyOrder(orderId);
            await poManager.placeOrderPage.clickViewOrdersButton();
        });

        test(`Place Order for ${prodName} Verigy through Orders`, async () => {
            await poManager.cartPage.addProdToCart(prodName);
            await poManager.cartPage.navigateToCart();
            await poManager.placeOrderPage.placeOrder(country);
            orderId = await poManager.placeOrderPage.getOrderId();
            await poManager.placeOrderPage.navigateToOrdersPage();
            await poManager.placeOrderPage.verifyOrder(orderId);
            await poManager.placeOrderPage.clickViewOrdersButton();
        });

        test.afterEach(async () => {
            await poManager.loginPage.signOut();
        });

    });

}







