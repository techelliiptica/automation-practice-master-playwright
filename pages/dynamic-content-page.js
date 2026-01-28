const { BasePage } = require('../utils/base-page');

class DynamicContentPage extends BasePage {
  constructor(page) {
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

module.exports = { DynamicContentPage };
