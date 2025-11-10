import { expect } from '@playwright/test';

export class Login {
    constructor(page) {
        this.page = page;

        this.usernameField = this.page.getByTestId('login-username'); 
        this.passwordField = this.page.getByTestId('login-password'); 
        this.loginButton = this.page.getByTestId('login-button'); 
        this.welcomeMessage = this.page.getByTestId('welcome-msg'); 
    }

        async fillUsernameField(username) {
            await this.usernameField.fill(username);
    }

        async fillPasswordField(password) {
            await this.passwordField.fill(password);
    }

        async clickLoginButton() {
            await this.loginButton.click();
    }

        async logInWithCredentials(username, password) {
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginButton.click();
    }

        async verifyWelcomeMessage(username) {
            await expect(this.welcomeMessage).toBeVisible();
            await expect(this.welcomeMessage).toContainText(`Witaj: ${username}`);
    }
}

module.exports = { Login };