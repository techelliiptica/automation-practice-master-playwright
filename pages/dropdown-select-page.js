const { BasePage } = require('../utils/base-page');

class DropdownSelectPage extends BasePage {
  constructor(page) {
    super(page);
    this.singleSelect = page.locator('#country');
    this.multiSelect = page.locator('#languages');
    this.resultDisplay = page.locator('.result-display');
  }

  async selectOption(value) {
    await this.singleSelect.selectOption(value);
  }

  async selectMultipleOptions(values) {
    await this.multiSelect.selectOption(values);
  }

  async getSelectedValue() {
    return await this.singleSelect.inputValue();
  }
}

module.exports = { DropdownSelectPage };
