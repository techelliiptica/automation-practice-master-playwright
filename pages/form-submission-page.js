const { BasePage } = require('../utils/base-page');

class FormSubmissionPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameInput = page.locator('#fullName');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.messageTextarea = page.locator('#bio');
    this.submitButton = page.locator('button[type="submit"]');
    this.resultDisplay = page.locator('.result-display');
  }

  async fillForm(name, email, password, message) {
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

module.exports = { FormSubmissionPage };
