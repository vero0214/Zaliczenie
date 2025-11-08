import { expect } from '@playwright/test';
export class Product {
    constructor(page) {
        this.page = page;
        this.url = 'products/p1.html';
        this.pageTitle = 'Miecz Runiczny – Testowy Sklep';

        this.productHeading = page.getByRole('heading', { name: 'Miecz Runiczny' });  
        this.buyButton = page.getByTestId('buy-btn-1');  
        this.cartButton = page.getByTestId('cart-button');
        this.cartBuyButton = page.getByTestId('cart-buy'); 
        this.cartPanel = page.getByTestId('cart-panel'); 

    }

        async checkProductPageURL() {
            await expect(this.page).toHaveURL('/products/p1.html');
            await expect(this.productHeading).toBeVisible();
    }


        async addProductToCart() {
            await this.buyButton.click();
            await expect(this.page.getByText('Dodano do koszyka: Miecz Runiczny')).toBeVisible();
    }

        async showCart() {
            await this.cartButton.click();
            await expect(this.cartPanel).toBeVisible();
    }

     async finalizePurchase() {
            await expect(this.cartPanel.getByText('Miecz Runiczny (p1)')).toBeVisible();
            await this.cartBuyButton.click();
            await expect(this.page.getByText('sukces')).toBeVisible();
    }

    }

module.exports = { Product };