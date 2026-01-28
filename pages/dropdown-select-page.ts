import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class DropdownSelectPage extends BasePage {
  readonly singleSelect: Locator;
  readonly multiSelect: Locator;
  readonly resultDisplay: Locator;

  constructor(page: Page) {
    super(page);
    this.singleSelect = page.locator('#singleSelect');
    this.multiSelect = page.locator('#multiSelect');
    this.resultDisplay = page.locator('.result-display');
  }

  async selectOption(value: string) {
    await this.singleSelect.selectOption(value);
  }

  async selectMultipleOptions(values: string[]) {
    await this.multiSelect.selectOption(values);
  }

  async getSelectedValue() {
    return await this.singleSelect.inputValue();
  }
}
