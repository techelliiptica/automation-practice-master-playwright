const { BasePage } = require('../utils/base-page');

class CheckboxRadioPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkbox1 = page.locator('#checkbox1');
    this.checkbox2 = page.locator('#checkbox2');
    this.checkbox3 = page.locator('#checkbox3');
    this.radioOption1 = page.locator('input[name="basicRadio"][value="choice1"]');
    this.radioOption2 = page.locator('input[name="basicRadio"][value="choice2"]');
    this.resultDisplay = page.locator('.result-display');
  }

  async checkCheckbox(id) {
    await this.page.locator(`#${id}`).check();
  }

  async uncheckCheckbox(id) {
    await this.page.locator(`#${id}`).uncheck();
  }

  async selectRadioOption(value) {
    await this.page.locator(`input[name="basicRadio"][value="${value}"]`).check();
  }

  async isCheckboxChecked(id) {
    return await this.page.locator(`#${id}`).isChecked();
  }

  async isRadioChecked(value) {
    return await this.page.locator(`input[name="basicRadio"][value="${value}"]`).isChecked();
  }
}

module.exports = { CheckboxRadioPage };
