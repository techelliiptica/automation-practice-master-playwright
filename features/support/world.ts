import { setWorldConstructor, setDefaultTimeout, IWorldOptions } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, BrowserContext, Page } from '@playwright/test';

export class CustomWorld {
  public page!: Page;
  public browser: Browser | null = null;
  public context: BrowserContext | null = null;
  public attach: (data: string | Buffer, mediaType?: string) => void;
  public parameters: { [key: string]: string };

  constructor({ attach, parameters }: IWorldOptions) {
    this.attach = attach;
    this.parameters = parameters;
  }

  async initBrowser(browserName: string = 'chromium'): Promise<void> {
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

  async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async takeScreenshot(name: string): Promise<void> {
    if (this.page) {
      const screenshot = await this.page.screenshot({ 
        path: `screenshots/${name}.png`, 
        fullPage: true 
      });
      this.attach(screenshot, 'image/png');
    }
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000); // 60 seconds
