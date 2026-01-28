import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class DynamicContentPage extends BasePage {
  readonly addButton: Locator;
  readonly removeButton: Locator;
  readonly delayedButton: Locator;
  readonly dynamicContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = page.locator('button:has-text("Add")');
    this.removeButton = page.locator('button:has-text("Remove")');
    this.delayedButton = page.locator('button:has-text("Delayed")');
    this.dynamicContainer = page.locator('#dynamicContent');
  }

  async addDynamicElement() {
    await this.addButton.click();
  }

  async removeDynamicElement() {
    await this.removeButton.click();
  }

  async clickDelayedButton() {
    await this.delayedButton.click();
  }

  async waitForDynamicContent() {
    await this.dynamicContainer.waitFor({ state: 'visible' });
  }
}
