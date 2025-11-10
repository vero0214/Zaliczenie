import { expect } from '@playwright/test';

export class Product {
    constructor(page) {
        this.page = page;
        this.partialUrl = 'products/';
          
        this.buyButton = this.page.getByTestId('buy-btn-1');  
        this.toastSuccess = this.page.locator('.toast-success');
    }

    async checkProductPageURL(productId) {
        await expect(this.page).toHaveURL(`${this.partialUrl}${productId}.html`);
    }

    async checkProductPageTitle(productName) {
        await expect(this.page.getByRole('heading', { name: productName})).toBeVisible();
    }

    async addProductToCart(productName) {
        await this.buyButton.click();
        await expect(this.toastSuccess).toBeVisible();
        await expect(this.toastSuccess).toContainText(`Dodano do koszyka: ${productName}`);
    }
}

module.exports = { Product };