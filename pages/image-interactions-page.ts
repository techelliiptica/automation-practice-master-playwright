import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class ImageInteractionsPage extends BasePage {
  readonly image1: Locator;
  readonly image2: Locator;
  readonly image3: Locator;
  readonly extractInfoBtn: Locator;
  readonly addDynamicImageBtn: Locator;
  readonly resultDisplay: Locator;

  constructor(page: Page) {
    super(page);
    this.image1 = page.locator('.image-item').first().locator('img');
    this.image2 = page.locator('.image-item').nth(1).locator('img');
    this.image3 = page.locator('.image-item').nth(2).locator('img');
    this.extractInfoBtn = page.locator('button:has-text("Get Image 1 Info")');
    this.addDynamicImageBtn = page.locator('button:has-text("Add Dynamic Image")');
    this.resultDisplay = page.locator('#extractResult');
  }

  async getImageAlt(imageIndex: number) {
    return await this.page.locator('.image-item').nth(imageIndex).locator('img').getAttribute('alt');
  }

  async getImageSrc(imageIndex: number) {
    return await this.page.locator('.image-item').nth(imageIndex).locator('img').getAttribute('src');
  }

  async clickImage(imageIndex: number) {
    await this.page.locator('.image-item').nth(imageIndex).locator('img').click();
  }

  async extractImageInfo(imageId: string) {
    await this.page.locator(`button:has-text("Get Image ${imageId} Info")`).click();
  }

  async addDynamicImage() {
    await this.addDynamicImageBtn.click();
  }

  async isImageBroken(imageIndex: number) {
    const img = this.page.locator('.image-item').nth(imageIndex).locator('img');
    const naturalWidth = await img.evaluate((el: any) => (el as HTMLImageElement).naturalWidth);
    return naturalWidth === 0;
  }
}
