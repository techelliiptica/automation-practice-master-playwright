const { test, expect } = require('@playwright/test');
const { DragDropPage } = require('../pages/drag-drop-page');

test.describe('Drag & Drop', () => {
  test.beforeEach(async ({ page }) => {
    const dragDropPage = new DragDropPage(page);
    await dragDropPage.navigateTo('/drag-drop.html');
  });

  test('should drag element to drop zone', async ({ page }) => {
    const dragDropPage = new DragDropPage(page);
    
    await dragDropPage.dragToDropZone();
    
    // Verify element was moved to target
    const targetItems = await dragDropPage.targetContainer.locator('.drag-item').count();
    expect(targetItems).toBeGreaterThan(0);
  });

  test('should drag between containers', async ({ page }) => {
    const dragDropPage = new DragDropPage(page);
    
    // Use item2 for this test
    const item2 = page.locator('#item2');
    await item2.dragTo(dragDropPage.targetContainer);
    await page.waitForTimeout(500);
    
    // Verify element was moved to target
    const targetItems = await dragDropPage.targetContainer.locator('.drag-item').count();
    expect(targetItems).toBeGreaterThan(0);
  });
});
