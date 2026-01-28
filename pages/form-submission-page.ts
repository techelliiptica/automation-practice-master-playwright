import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class FormSubmissionPage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly messageTextarea: Locator;
  readonly submitButton: Locator;
  readonly resultDisplay: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.locator('#fullName');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.messageTextarea = page.locator('#bio');
    this.submitButton = page.locator('button[type="submit"]');
    this.resultDisplay = page.locator('.result-display');
  }

  async fillForm(name: string, email: string, password: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.messageTextarea.fill(message);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async getResultText() {
    return await this.resultDisplay.textContent();
  }
}
