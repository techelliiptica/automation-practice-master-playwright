const { test, expect } = require('@playwright/test');
const { ImageInteractionsPage } = require('../pages/image-interactions-page');

test.describe('Image Interactions', () => {
  test.beforeEach(async ({ page }) => {
    const imagePage = new ImageInteractionsPage(page);
    await imagePage.navigateTo('/image-interactions.html');
  });

  test('should verify image alt text', async ({ page }) => {
    const imagePage = new ImageInteractionsPage(page);
    
    const altText = await imagePage.getImageAlt(0);
    expect(altText).toBeTruthy();
    expect(altText).toContain('TechElliptica');
  });

  test('should verify image source', async ({ page }) => {
    const imagePage = new ImageInteractionsPage(page);
    
    const src = await imagePage.getImageSrc(0);
    expect(src).toContain('techelliptica.com');
  });

  test('should identify broken images', async ({ page }) => {
    const imagePage = new ImageInteractionsPage(page);
    
    // Image 3, 5, 6 are broken (indices 2, 4, 5)
    const isBroken = await imagePage.isImageBroken(2);
    expect(isBroken).toBeTruthy();
  });

  test('should extract image information', async ({ page }) => {
    const imagePage = new ImageInteractionsPage(page);
    
    await imagePage.extractImageInfo('1');
    await expect(imagePage.resultDisplay).toBeVisible();
  });

  test('should add dynamic image', async ({ page }) => {
    const imagePage = new ImageInteractionsPage(page);
    
    await imagePage.addDynamicImage();
    await expect(page.locator('.image-label:has-text("Dynamic Image 1")')).toBeVisible();
  });
});
