import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class AlertsModalsPage extends BasePage {
  readonly alertButton: Locator;
  readonly confirmButton: Locator;
  readonly promptButton: Locator;
  readonly modalButton: Locator;
  readonly modal: Locator;
  readonly modalCloseButton: Locator;

  constructor(page: Page) {
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

  async openModalById(modalId: string) {
    await this.page.locator(`button:has-text("Open ${modalId}")`).click();
  }

  async getModal(modalId: string) {
    return this.page.locator(`#${modalId}.modal`);
  }
}
