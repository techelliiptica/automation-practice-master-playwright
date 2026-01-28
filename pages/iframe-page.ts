import { Page, Locator, FrameLocator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class IframePage extends BasePage {
  readonly iframe: Locator;
  readonly nestedIframe: Locator;

  constructor(page: Page) {
    super(page);
    this.iframe = page.locator('iframe').first();
    this.nestedIframe = page.locator('iframe').nth(1);
  }

  getIframeContent(): FrameLocator {
    return this.page.frameLocator('iframe').first();
  }

  getNestedIframeContent(): FrameLocator {
    const parentIframe = this.page.frameLocator('#parentIframe');
    return parentIframe.frameLocator('iframe');
  }

  async clickButtonInIframe(buttonText: string) {
    const iframe = this.getIframeContent();
    await iframe.locator(`button:has-text("${buttonText}")`).click();
  }
}
