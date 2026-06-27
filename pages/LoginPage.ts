import PageObjects from "./PageObjects";
import { Page, expect } from '@playwright/test';


export default class LoginPage extends PageObjects {

    constructor ( page: Page ) {
        super( page ); // Referring the parent class constructor
    }

    async goto( url: string ) {
        await this.page.goto( url );
        await this.page.waitForLoadState( 'domcontentloaded' );
    }

    async login( email: string, password: string ) {
        await this.emailField.fill( email );
        await this.pswdField.fill( password );
        await this.loginBtn.click();
        await expect.soft( this.successMessage, 'Login Success message shold be displayed' ).toBeVisible();

    }

    async signOut() {
        await this.signoutBtn.click();
        await expect.soft(this.successMessage, 'Logout Success message shold be displayed').toBeVisible();

    }


}