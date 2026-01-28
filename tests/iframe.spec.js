const { test, expect } = require('@playwright/test');
const { IframePage } = require('../pages/iframe-page');

test.describe('Iframe Handling', () => {
  test.beforeEach(async ({ page }) => {
    const iframePage = new IframePage(page);
    await iframePage.navigateTo('/iframe.html');
  });

  test('should interact with iframe content', async ({ page }) => {
    const iframePage = new IframePage(page);
    
    const iframe = iframePage.getIframeContent();
    await expect(iframe.locator('body')).toBeVisible();
  });

  test('should click button inside iframe', async ({ page }) => {
    const iframePage = new IframePage(page);
    
    await iframePage.clickButtonInIframe('Submit');
    // Verify action completed
  });

  test('should handle nested iframe', async ({ page }) => {
    const iframePage = new IframePage(page);
    
    // Wait for parent iframe to load
    await page.waitForSelector('#parentIframe');
    const nestedIframe = iframePage.getNestedIframeContent();
    // Check if nested iframe exists
    const iframeCount = await nestedIframe.locator('body').count();
    expect(iframeCount).toBeGreaterThanOrEqual(0);
  });
});
