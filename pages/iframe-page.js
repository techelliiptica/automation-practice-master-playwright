const { BasePage } = require('../utils/base-page');

class IframePage extends BasePage {
  constructor(page) {
    super(page);
    this.iframe = page.locator('iframe').first();
    this.nestedIframe = page.locator('iframe').nth(1);
  }

  getIframeContent() {
    return this.page.frameLocator('iframe').first();
  }

  getNestedIframeContent() {
    const parentIframe = this.page.frameLocator('#parentIframe');
    return parentIframe.frameLocator('iframe');
  }

  async clickButtonInIframe(buttonText) {
    const iframe = this.getIframeContent();
    await iframe.locator(`button:has-text("${buttonText}")`).click();
  }
}

module.exports = { IframePage };
