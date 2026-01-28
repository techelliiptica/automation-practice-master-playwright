import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class DynamicContentPage extends BasePage {
  readonly addButton: Locator;
  readonly removeButton: Locator;
  readonly delayedButton: Locator;
  readonly dynamicContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = page.locator('button:has-text("Add Item")');
    this.removeButton = page.locator('button:has-text("Clear All")');
    this.delayedButton = page.locator('button:has-text("Load Content (3 second delay)")');
    this.dynamicContainer = page.locator('#dynamicList');
  }

  async addDynamicElement() {
    await this.addButton.click();
  }

  async removeDynamicElement() {
    await this.removeButton.click();
  }

  async clickDelayedButton() {
    await this.delayedButton.click();
    await this.page.waitForTimeout(3500);
  }

  async waitForDynamicContent() {
    await this.page.locator('#delayedContent').waitFor({ state: 'visible' });
  }
}
