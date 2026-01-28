import { test, expect } from '@playwright/test';
import { IframePage } from '../pages/iframe-page';

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
    
    const nestedIframe = iframePage.getNestedIframeContent();
    await expect(nestedIframe.locator('body')).toBeVisible();
  });
});
