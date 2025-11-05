import { expect } from '@playwright/test';
export class Main {
    constructor(page) {
        this.page = page;
        this.url = '/';
        this.pageTitle = 'Testowy Sklep – Strona główna';

        this.productName = page.getByTestId('product-title-1');  
       

    }

        async navigateTo() {
            await this.page.goto(this.url);
            await expect(this.page).toHaveTitle(this.pageTitle);
            await expect(this.page.getByRole('heading', { name: 'Strona główna' })).toBeVisible();
    }


        async checkProductAvailability() {
            await expect(this.productName).toHaveText('Miecz Runiczny');
    }

        async clickProductName() {
            await this.productName.click();
    }

    }

module.exports = { Main };