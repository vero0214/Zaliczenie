// @ts-nocheck
import { test, expect } from '@playwright/test';
import { Main } from '../pages/main';
import { Product } from '../pages/product';
import { Cart } from '../pages/cart';

test('E2E product purchase', async ({ page }) => {

  const main = new Main(page);
  const product = new Product(page);
  const cart = new Cart(page);
  
  const testedProduct = {
    name: 'Miecz Runiczny',
    id: 'p1',
    price: '199.99 zł'
  };

  await main.navigateTo();
  
  await main.checkProductAvailability(testedProduct.name);

  await main.clickProductName(testedProduct.name);
  
  await product.checkProductPageURL(testedProduct.id);

  await product.checkProductPageTitle(testedProduct.name);

  await product.addProductToCart(testedProduct.name);
  
  await cart.showCart();

  await cart.verifyCartItems(testedProduct.name);
  
  await cart.finalizePurchase()
 
});



