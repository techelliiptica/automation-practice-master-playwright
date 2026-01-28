import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class LinkInteractionsPage extends BasePage {
  readonly basicLink: Locator;
  readonly newTabLink: Locator;
  readonly dynamicLinkBtn: Locator;
  readonly link1: Locator;
  readonly link2: Locator;
  readonly link3: Locator;
  readonly link4: Locator;
  readonly link5: Locator;
  readonly link6: Locator;

  constructor(page: Page) {
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

  async clickBrokenLink(linkNumber: number) {
    await this.page.locator(`text=Link ${linkNumber}`).click();
  }
}
