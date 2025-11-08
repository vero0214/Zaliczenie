// @ts-nocheck
import { test, expect } from '@playwright/test';
import { Main } from '../pages/main';
import { Product } from '../pages/product';

test('E2E product purchase', async ({ page }) => {

  const main = new Main(page)
  const product = new Product(page)
  

  await main.navigateTo();
  
  await main.checkProductAvailability();

  await main.clickProductName();
  
  await product.checkProductPageURL();

  await product.addProductToCart();
  
  await product.showCart();
  
  await product.finalizePurchase()
 
});



