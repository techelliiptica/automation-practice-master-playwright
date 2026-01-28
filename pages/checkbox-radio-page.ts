import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class CheckboxRadioPage extends BasePage {
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;
  readonly checkbox3: Locator;
  readonly radioOption1: Locator;
  readonly radioOption2: Locator;
  readonly resultDisplay: Locator;

  constructor(page: Page) {
    super(page);
    this.checkbox1 = page.locator('#checkbox1');
    this.checkbox2 = page.locator('#checkbox2');
    this.checkbox3 = page.locator('#checkbox3');
    this.radioOption1 = page.locator('input[name="basicRadio"][value="choice1"]');
    this.radioOption2 = page.locator('input[name="basicRadio"][value="choice2"]');
    this.resultDisplay = page.locator('.result-display');
  }

  async checkCheckbox(id: string) {
    await this.page.locator(`#${id}`).check();
  }

  async uncheckCheckbox(id: string) {
    await this.page.locator(`#${id}`).uncheck();
  }

  async selectRadioOption(value: string) {
    await this.page.locator(`input[name="basicRadio"][value="${value}"]`).check();
  }

  async isCheckboxChecked(id: string) {
    return await this.page.locator(`#${id}`).isChecked();
  }

  async isRadioChecked(value: string) {
    return await this.page.locator(`input[name="basicRadio"][value="${value}"]`).isChecked();
  }
}
