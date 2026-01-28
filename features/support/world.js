const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');

class CustomWorld {
  constructor({ attach, parameters }) {
    this.attach = attach;
    this.parameters = parameters;
    this.page = null;
    this.browser = null;
    this.context = null;
  }

  async initBrowser(browserName = 'chromium') {
    const browserType = {
      chromium,
      firefox,
      webkit
    }[browserName] || chromium;

    this.browser = await browserType.launch({
      headless: process.env.HEADLESS !== 'false',
    });

    this.context = await this.browser.newContext({
      baseURL: 'http://localhost:3000',
    });

    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async takeScreenshot(name) {
    if (this.page) {
      const screenshot = await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
      this.attach(screenshot, 'image/png');
    }
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000); // 60 seconds

module.exports = { CustomWorld };
