const { test, expect } = require('@playwright/test');
const { DynamicContentPage } = require('../pages/dynamic-content-page');

test.describe('Dynamic Content', () => {
  test.beforeEach(async ({ page }) => {
    const dynamicPage = new DynamicContentPage(page);
    await dynamicPage.navigateTo('/dynamic-content.html');
  });

  test('should add dynamic element', async ({ page }) => {
    const dynamicPage = new DynamicContentPage(page);
    
    await dynamicPage.addDynamicElement();
    await expect(page.locator('#dynamicList .list-item, #dynamicList li')).toBeVisible();
  });

  test('should remove dynamic element', async ({ page }) => {
    const dynamicPage = new DynamicContentPage(page);
    
    await dynamicPage.addDynamicElement();
    await page.waitForTimeout(500);
    await dynamicPage.removeDynamicElement();
    await expect(page.locator('#dynamicList .list-item, #dynamicList li')).not.toBeVisible();
  });

  test('should wait for delayed content', async ({ page }) => {
    const dynamicPage = new DynamicContentPage(page);
    
    await dynamicPage.clickDelayedButton();
    await expect(page.locator('#delayedContent')).not.toContainText('Click the button');
  });
});
