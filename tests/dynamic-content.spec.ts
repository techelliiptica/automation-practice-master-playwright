import { test, expect } from '@playwright/test';
import { DynamicContentPage } from '../pages/dynamic-content-page';

test.describe('Dynamic Content', () => {
  test.beforeEach(async ({ page }) => {
    const dynamicPage = new DynamicContentPage(page);
    await dynamicPage.navigateTo('/dynamic-content.html');
  });

  test('should add dynamic element', async ({ page }) => {
    const dynamicPage = new DynamicContentPage(page);
    
    await dynamicPage.addDynamicElement();
    await expect(dynamicPage.dynamicContainer).toBeVisible();
  });

  test('should remove dynamic element', async ({ page }) => {
    const dynamicPage = new DynamicContentPage(page);
    
    await dynamicPage.addDynamicElement();
    await dynamicPage.removeDynamicElement();
    // Verify element is removed
  });

  test('should wait for delayed content', async ({ page }) => {
    const dynamicPage = new DynamicContentPage(page);
    
    await dynamicPage.clickDelayedButton();
    await dynamicPage.waitForDynamicContent();
    await expect(dynamicPage.dynamicContainer).toBeVisible();
  });
});
