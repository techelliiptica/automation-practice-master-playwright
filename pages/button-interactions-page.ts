import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class ButtonInteractionsPage extends BasePage {
  readonly primaryBtn: Locator;
  readonly secondaryBtn: Locator;
  readonly successBtn: Locator;
  readonly dangerBtn: Locator;
  readonly counterBtn: Locator;
  readonly clickCount: Locator;
  readonly disabledBtn: Locator;
  readonly toggleBtn: Locator;
  readonly addBtn: Locator;
  readonly removeBtn: Locator;
  readonly doubleClickBtn: Locator;
  readonly delayBtn: Locator;
  readonly rightClickBtn: Locator;
  readonly contextMenu: Locator;
  readonly basicMessage: Locator;
  readonly doubleClickMessage: Locator;
  readonly delayMessage: Locator;
  readonly rightClickMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.primaryBtn = page.locator('#primaryBtn');
    this.secondaryBtn = page.locator('#secondaryBtn');
    this.successBtn = page.locator('#successBtn');
    this.dangerBtn = page.locator('#dangerBtn');
    this.counterBtn = page.locator('#counterBtn');
    this.clickCount = page.locator('#clickCount');
    this.disabledBtn = page.locator('#disabledBtn');
    this.toggleBtn = page.locator('#toggleBtn');
    this.addBtn = page.locator('#addBtn');
    this.removeBtn = page.locator('#removeBtn');
    this.doubleClickBtn = page.locator('#doubleClickBtn');
    this.delayBtn = page.locator('#delayBtn');
    this.rightClickBtn = page.locator('#rightClickBtn');
    this.contextMenu = page.locator('#contextMenu');
    this.basicMessage = page.locator('#basicMessage');
    this.doubleClickMessage = page.locator('#doubleClickMessage');
    this.delayMessage = page.locator('#delayMessage');
    this.rightClickMessage = page.locator('#rightClickMessage');
  }

  async clickPrimaryButton() {
    await this.primaryBtn.click();
  }

  async clickCounterButton() {
    await this.counterBtn.click();
  }

  async getClickCount() {
    return await this.clickCount.textContent();
  }

  async toggleDisabledButton() {
    await this.toggleBtn.click();
  }

  async addDynamicButton() {
    await this.addBtn.click();
  }

  async removeLastButton() {
    await this.removeBtn.click();
  }

  async doubleClickButton() {
    await this.doubleClickBtn.dblclick();
  }

  async rightClickButton() {
    await this.rightClickBtn.click({ button: 'right' });
  }

  async selectContextMenuOption(option: string) {
    await this.contextMenu.locator(`text=${option}`).click();
  }

  async waitForDelayButtonResponse() {
    await this.delayBtn.click();
    await this.page.waitForTimeout(3000);
  }
}
