import TestConfig from '../testdata/TestConfig';
import ReadFiles from '../utils/ReadFiles';
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';
import { expect, Page } from '@playwright/test';


export default class PageObjectManager {

    readonly loginPage: LoginPage;
    readonly cartPage: CartPage;
    readonly placeOrderPage: PlaceOrderPage;
    readonly testConfig: TestConfig;

    constructor ( page: Page ) {
        this.loginPage = new LoginPage( page );
        this.cartPage = new CartPage( page );
        this.placeOrderPage = new PlaceOrderPage( page );
        this.testConfig = new TestConfig();


    }

}