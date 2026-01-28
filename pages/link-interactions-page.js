const { BasePage } = require('../utils/base-page');

class LinkInteractionsPage extends BasePage {
  constructor(page) {
    super(page);
    this.basicLink = page.locator('a[href="index.html"]').first();
    this.newTabLink = page.locator('a[target="_blank"]').first();
    this.dynamicLinkBtn = page.locator('button:has-text("Add Dynamic Link")');
    this.link1 = page.locator('text=Link 1');
    this.link2 = page.locator('text=Link 2');
    this.link3 = page.locator('text=Link 3');
    this.link4 = page.locator('text=Link 4');
    this.link5 = page.locator('text=Link 5');
    this.link6 = page.locator('text=Link 6');
  }

  async clickBasicLink() {
    await this.basicLink.click();
  }

  async clickNewTabLink() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.newTabLink.click()
    ]);
    return newPage;
  }

  async addDynamicLink() {
    await this.dynamicLinkBtn.click();
  }

  async clickBrokenLink(linkNumber) {
    await this.page.locator(`a[href*="Link ${linkNumber}"], a:has-text("Link ${linkNumber}")`).first().click();
  }
}

module.exports = { LinkInteractionsPage };
