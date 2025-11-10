// @ts-nocheck
import { test, expect } from '@playwright/test';
import { Main } from '../pages/main';
import { Login } from '../pages/login';

test.beforeEach(async ({ page }) => {
  const main = new Main(page);

  await main.navigateTo();
});

test('log in as admin', async ({ page }) => {

  const login = new Login(page);

  await login.logInWithCredentials(process.env.ADMIN_LOGIN, process.env.ADMIN_PASSWORD);
  await login.verifyWelcomeMessage(process.env.ADMIN_LOGIN);
  
});


test('log in as user', async ({ page }) => {
  
  const login = new Login(page);

  await login.logInWithCredentials(process.env.USER_LOGIN, process.env.USER_PASSWORD);
  await login.verifyWelcomeMessage(process.env.USER_LOGIN);
  
});