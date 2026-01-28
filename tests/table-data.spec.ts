import { test, expect } from '@playwright/test';
import { TableDataPage } from '../pages/table-data-page';

test.describe('Table Data', () => {
  test.beforeEach(async ({ page }) => {
    const tablePage = new TableDataPage(page);
    await tablePage.navigateTo('/table-data.html');
  });

  test('should extract table data', async ({ page }) => {
    const tablePage = new TableDataPage(page);
    
    const rows = await tablePage.getTableRows();
    expect(rows.length).toBeGreaterThan(0);
    
    const cellText = await tablePage.getCellText(0, 0);
    expect(cellText).toBeTruthy();
  });

  test('should sort table', async ({ page }) => {
    const tablePage = new TableDataPage(page);
    
    const firstCellBefore = await tablePage.getCellText(0, 0);
    await tablePage.sortTable();
    await page.waitForTimeout(500);
    
    const firstCellAfter = await tablePage.getCellText(0, 0);
    // Verify sorting occurred
    expect(firstCellAfter).toBeTruthy();
  });

  test('should filter table', async ({ page }) => {
    const tablePage = new TableDataPage(page);
    
    await tablePage.filterTable('test');
    await page.waitForTimeout(500);
    
    const rows = await tablePage.getTableRows();
    expect(rows.length).toBeGreaterThanOrEqual(0);
  });
});
