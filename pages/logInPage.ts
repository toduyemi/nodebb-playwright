import type { Page, Locator } from '@playwright/test';

export class LogInPage {
  page: Page;
  userNameField: Locator;
  passField: Locator;
  loginBtn: Locator;
  rememberMe: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameField = this.page.getByLabel('Username / Email');
    this.passField = this.page.getByLabel('Password');
    this.loginBtn = this.page.getByRole('button', { name: 'Login' });
    this.rememberMe = this.page.getByLabel('Remember Me?');
  }

  async fillLogin({ user, pass }: { user: string; pass: string }) {
    await this.userNameField.fill(user);
    await this.passField.fill(pass);
    await this.loginBtn.click();
  }
}
