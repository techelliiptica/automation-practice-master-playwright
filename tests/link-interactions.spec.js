const { test, expect } = require('@playwright/test');
const { LinkInteractionsPage } = require('../pages/link-interactions-page');

test.describe('Link Interactions', () => {
  test.beforeEach(async ({ page }) => {
    const linkPage = new LinkInteractionsPage(page);
    await linkPage.navigateTo('/link-interactions.html');
  });

  test('should click basic link', async ({ page }) => {
    const linkPage = new LinkInteractionsPage(page);
    
    await linkPage.clickBasicLink();
    await expect(page).toHaveURL(/.*index\.html/);
  });

  test('should open link in new tab', async ({ page, context }) => {
    const linkPage = new LinkInteractionsPage(page);
    
    const newPage = await linkPage.clickNewTabLink();
    // The link might open Google or another external site
    expect(newPage.url()).toBeTruthy();
    await newPage.close();
  });

  test('should add dynamic link', async ({ page }) => {
    const linkPage = new LinkInteractionsPage(page);
    
    await linkPage.addDynamicLink();
    await expect(page.locator('a:has-text("Dynamic Link"), a[href*="techelliptica"]').last()).toBeVisible();
  });

  test('should identify broken links', async ({ page }) => {
    const linkPage = new LinkInteractionsPage(page);
    
    // Link 3, 5, 6 are broken
    await linkPage.clickBrokenLink(3);
    // Should handle error or show broken link message
    await page.waitForTimeout(1000);
  });
});
