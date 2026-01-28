import { test, expect } from '@playwright/test';
import { DragDropPage } from '../pages/drag-drop-page';

test.describe('Drag & Drop', () => {
  test.beforeEach(async ({ page }) => {
    const dragDropPage = new DragDropPage(page);
    await dragDropPage.navigateTo('/drag-drop.html');
  });

  test('should drag element to drop zone', async ({ page }) => {
    const dragDropPage = new DragDropPage(page);
    
    await dragDropPage.dragToDropZone();
    await page.waitForTimeout(500);
    
    // Verify element was moved
    await expect(dragDropPage.dropZone).toBeVisible();
  });

  test('should drag between containers', async ({ page }) => {
    const dragDropPage = new DragDropPage(page);
    
    await dragDropPage.dragBetweenContainers();
    await page.waitForTimeout(500);
    
    // Verify element was moved
    await expect(dragDropPage.targetContainer).toBeVisible();
  });
});
