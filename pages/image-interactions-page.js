const { BasePage } = require('../utils/base-page');

class ImageInteractionsPage extends BasePage {
  constructor(page) {
    super(page);
    this.image1 = page.locator('.image-item').first().locator('img');
    this.image2 = page.locator('.image-item').nth(1).locator('img');
    this.image3 = page.locator('.image-item').nth(2).locator('img');
    this.extractInfoBtn = page.locator('button:has-text("Get Image 1 Info")');
    this.addDynamicImageBtn = page.locator('button:has-text("Add Dynamic Image")');
    this.resultDisplay = page.locator('#extractResult');
  }

  async getImageAlt(imageIndex) {
    return await this.page.locator('.image-item').nth(imageIndex).locator('img').getAttribute('alt');
  }

  async getImageSrc(imageIndex) {
    return await this.page.locator('.image-item').nth(imageIndex).locator('img').getAttribute('src');
  }

  async clickImage(imageIndex) {
    await this.page.locator('.image-item').nth(imageIndex).locator('img').click();
  }

  async extractImageInfo(imageId) {
    await this.page.locator(`button:has-text("Get Image ${imageId} Info")`).click();
  }

  async addDynamicImage() {
    await this.addDynamicImageBtn.click();
  }

  async isImageBroken(imageIndex) {
    const img = this.page.locator('.image-item').nth(imageIndex).locator('img');
    const naturalWidth = await img.evaluate((el) => el.naturalWidth);
    return naturalWidth === 0;
  }
}

module.exports = { ImageInteractionsPage };
