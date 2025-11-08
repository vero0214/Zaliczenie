// @ts-nocheck
import { test, expect } from '@playwright/test';
import { Main } from '../pages/main';


test.beforeEach(async ({ page }) => {
  const main = new Main(page)

  await main.navigateTo();
});

test('log in as admin', async ({ page }) => {

  await page.getByTestId('login-username').fill(process.env.ADMIN_LOGIN);
  await page.getByTestId('login-password').fill(process.env.ADMIN_PASSWORD);
  await page.getByTestId('login-button').click()

  await expect(page.getByTestId('welcome-msg')).toBeVisible();
  await expect(page.getByTestId('welcome-msg')).toContainText(`Witaj: ${process.env.ADMIN_LOGIN}`);
});


test('log in as user', async ({ page }) => {

  await page.getByTestId('login-username').fill(process.env.USER_LOGIN);
  await page.getByTestId('login-password').fill(process.env.USER_PASSWORD);
  await page.getByTestId('login-button').click()

  await expect(page.getByTestId('welcome-msg')).toBeVisible();
  await expect(page.getByTestId('welcome-msg')).toContainText(`Witaj: ${process.env.USER_LOGIN}`);
  
});