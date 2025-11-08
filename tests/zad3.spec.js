// @ts-check
import { test, expect } from '@playwright/test';

test('check GET request - all products', async ({ request }) => {

  const response = await request.get('/api/index.php?endpoint=products');
  
  expect(response.status()).toBe(200);
//   console.log(await response.text());
  expect(await response.text()).toContain('Peleryna Maskująca');

});


test('check GET request - product by ID', async ({ request }) => {

  const response = await request.get('/api/index.php?endpoint=products&id=3');
  expect(response.status()).toBe(200);

//   console.log(await response.text());
  expect(await response.text()).toContain('Peleryna Maskująca');

});


test('check POST request - adding new product', async ({ request }) => {

  const response = await request.post('/api/index.php?endpoint=products', {
      data: {
        name: 'Testowy produkt',
        price: 123.45,
        currency: 'PLN'
      }
    });
  
  expect(response.status()).toBe(201);
  expect(await response.text()).toContain('Testowy produkt');

});


test('check PUT request - replacing product', async ({ request }) => {

  const response = await request.put('/api/index.php?endpoint=products&id=3', {
      data: {
        name: 'Zmieniony',
        price: 111.11
      }
    });

  expect(response.status()).toBe(200);

// console.log(await response.text());
  expect(await response.text()).toContain('Zmieniony');

});


test('check PATCH request - updating product', async ({ request }) => {

  const response = await request.patch('/api/index.php?endpoint=products&id=3', {
      data: {
        price: 222.22 
      }
    });

  expect(response.status()).toBe(200);

// console.log(await response.text());
  expect(await response.text()).toContain('222.22');

});


test('check DELETE request - removing product', async ({ request }) => {

  const response = await request.delete('/api/index.php?endpoint=products&id=3');
  
  expect(response.status()).toBe(204);

});