const { BasePage } = require('../utils/base-page');

class AlertsModalsPage extends BasePage {
  constructor(page) {
    super(page);
    this.alertButton = page.locator('button:has-text("Show Alert")');
    this.confirmButton = page.locator('button:has-text("Show Confirm")');
    this.promptButton = page.locator('button:has-text("Show Prompt")');
    this.modalButton = page.locator('button:has-text("Open Simple Modal")');
    this.modal = page.locator('#simpleModal.modal');
    this.modalCloseButton = page.locator('#simpleModal .close, #simpleModal button:has-text("Close")');
  }

  async clickAlertButton() {
    await this.alertButton.click();
  }

  async clickConfirmButton() {
    await this.confirmButton.click();
  }

  async clickPromptButton() {
    await this.promptButton.click();
  }

  async openModal() {
    await this.modalButton.click();
  }

  async closeModal() {
    await this.modalCloseButton.first().click();
  }

  async openModalById(modalId) {
    await this.page.locator(`button:has-text("Open ${modalId}")`).click();
  }

  async getModal(modalId) {
    return this.page.locator(`#${modalId}.modal`);
  }
}

module.exports = { AlertsModalsPage };
