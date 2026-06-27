import { expect, type Page } from "@playwright/test";
import PageObjects  from './PageObjects'

export default class PlaceOrderPage extends PageObjects {

    constructor(page: Page) {
        super(page);
    }

    async placeOrder(country: string) {
        await this.checkoutButton.click();
        await this.selectCountrydrp.click();
        await this.selectCountrydrp.pressSequentially(country);
        await expect.soft(this.countryOption.last()).toBeVisible();
        await this.countryOption.last().click();
        await this.placeOrderButton.click();
    }


    async getOrderId(): Promise<string> {
        await expect.soft(this.orderIdText).toBeVisible();
        return (await this.orderIdText.innerText()).replaceAll('|', '').trim();
    }

    async clickOrderHistoryLink() {
        await this.ordersHistoryButton.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }

     async navigateToOrdersPage() {
        await this.ordersButton.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }

    async verifyOrder(orderId: string) {
        for (const row of await this.rows.all()) {
            if (await row.locator('//th').innerText() == orderId) {
                await row.getByRole('button', { name: 'View' }).click();
                break;
            }
        }
        await expect.soft(this.orderIdInOrderDetails).toContainText(orderId);
    }

    async clickViewOrdersButton() {
        await this.viewOrdersButton.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }


}

