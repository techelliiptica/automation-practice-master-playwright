import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class HoverTooltipPage extends BasePage {
  readonly hoverElement: Locator;
  readonly tooltip: Locator;

  constructor(page: Page) {
    super(page);
    this.hoverElement = page.locator('[data-tooltip], .hover-element, button:has-text("Hover")').first();
    this.tooltip = page.locator('.tooltip, [role="tooltip"]');
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
