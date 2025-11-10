import { expect } from '@playwright/test';

export class Main {
  constructor(page) {
        this.page = page;
        this.url = '/';
        this.pageTitle = 'Testowy Sklep – Strona główna';

        this.productsSection = this.page.getByTestId('products-grid');  
    }

    async navigateTo() {
        await this.page.goto(this.url);
        await expect(this.page).toHaveTitle(this.pageTitle);
        await expect(this.page.getByRole('heading', { name: 'Strona główna' })).toBeVisible();
    }


    async checkProductAvailability(productName) {
        await expect(this.productsSection).toContainText(productName);
    }

    async clickProductName(productName) {
        await this.productsSection.getByRole('link', { name: productName}).click()
    }
}

module.exports = { Main };