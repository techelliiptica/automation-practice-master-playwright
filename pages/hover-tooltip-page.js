const { BasePage } = require('../utils/base-page');

class HoverTooltipPage extends BasePage {
  constructor(page) {
    super(page);
    this.hoverElement = page.locator('[data-tooltip], .hover-element, button:has-text("Hover")').first();
    this.tooltip = page.locator('.tooltip').first();
  }

  async hoverOverElement() {
    await this.hoverElement.hover();
  }

  async waitForTooltip() {
    await this.tooltip.waitFor({ state: 'visible' });
  }

  async getTooltipText() {
    return await this.tooltip.textContent();
  }
}

module.exports = { HoverTooltipPage };
