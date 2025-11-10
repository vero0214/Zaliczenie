import { expect } from '@playwright/test';

export class Cart {
    constructor(page) {
        this.page = page;
          
        this.cartButton = this.page.getByTestId('cart-button');
        this.cartModal = this.page.getByTestId('cart-panel'); 
        this.cartList = this.page.getByTestId('cart-list');
        this.cartBuyButton = this.page.getByTestId('cart-buy'); 
        this.succesToast = this.page.locator('.toast-container').getByText('sukces');
    }

    async showCart() {
        await this.cartButton.click();
        await expect(this.cartModal).toBeVisible();
    }

    async verifyCartItems(addedProductName){
        await expect(this.cartList.getByRole('listitem').filter({ hasText: addedProductName })).toHaveCount(1);
    }

     async finalizePurchase() {
        await this.cartBuyButton.click();
        await expect(this.succesToast).toBeVisible();
    }
}

module.exports = { Cart };