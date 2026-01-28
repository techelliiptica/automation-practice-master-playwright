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
    this.alertButton = page.locator('button:has-text("Alert")');
    this.confirmButton = page.locator('button:has-text("Confirm")');
    this.promptButton = page.locator('button:has-text("Prompt")');
    this.modalButton = page.locator('button:has-text("Modal")');
    this.modal = page.locator('.modal, [role="dialog"]');
    this.modalCloseButton = page.locator('.modal-close, button:has-text("Close")');
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
    await this.modalCloseButton.click();
  }
}
