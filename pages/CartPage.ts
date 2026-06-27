import PageObjects from "./PageObjects";
import { Page, expect } from '@playwright/test';


export default class CartPage extends PageObjects {

    constructor ( page: Page ) {
        super( page );
    }

    // async addProdToCart( prodName: string ) {
    //     const products = await this.prodCards.all();

    //     for ( const prod of products ) {
    //         if ( await prod.locator( 'b' ).innerText() == prodName ) {
    //             await prod.getByText( ' Add To Cart' ).click();
    //             break;
    //         }
    //     }
    //     await expect.soft( this.successMessage ).toBeVisible();

    // }


    async addProdToCart(prodName: string) {
        await expect.soft(this.prodCards.first()).toBeVisible();

        await expect.soft(this.prodCards.first()).toBeVisible();
        for (const prod of await this.prodCards.all()) {
            const prodNameAppln = await prod.locator("b").innerText();
            if (prodNameAppln == prodName) {
                await prod.locator("//button[text()=' Add To Cart']").click();
                break;
            }
        }

        // const products = this.prodCards;
        // const productsCount = await products.count();
        // for (let i = 0; i < productsCount; i++) {
        //     if (await products.nth(i).locator("//b").innerText() == ProdName) {
        //         await products.nth(i).locator("//button[text()=' Add To Cart']").click();
        //         break;
        //     }
        // }

        await expect.soft(this.successMessage).toBeVisible();
    }

    async navigateToCart() {
        await this.cartButton.first().click();
        await expect.soft(this.checkoutButton).toBeVisible();
    }


}


