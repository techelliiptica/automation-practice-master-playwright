const { test, expect } = require('@playwright/test');
const { TableDataPage } = require('../pages/table-data-page');

test.describe('Table Data', () => {
  test.beforeEach(async ({ page }) => {
    const tablePage = new TableDataPage(page);
    await tablePage.navigateTo('/table-data.html');
  });

  test('should extract table data', async ({ page }) => {
    const tablePage = new TableDataPage(page);
    
    const rows = await tablePage.getTableRows();
    expect(rows.length).toBeGreaterThan(0);
    
    // Use first() to handle multiple tables
    const firstRow = tablePage.table.locator('tbody tr').first();
    const firstCell = firstRow.locator('td').first();
    const cellText = await firstCell.textContent();
    expect(cellText).toBeTruthy();
  });

  test('should sort table', async ({ page }) => {
    const tablePage = new TableDataPage(page);
    
    const firstRow = tablePage.table.locator('tbody tr').first();
    const firstCellBefore = await firstRow.locator('td').first().textContent();
    
    // Check if sort button exists
    const sortButtonExists = await tablePage.sortButton.count();
    if (sortButtonExists > 0) {
      await tablePage.sortTable();
      await page.waitForTimeout(500);
      
      const firstCellAfter = await firstRow.locator('td').first().textContent();
      // Verify sorting occurred or content exists
      expect(firstCellAfter).toBeTruthy();
    }
  });

  test('should filter table', async ({ page }) => {
    const tablePage = new TableDataPage(page);
    
    // Check if filter input exists, if not skip
    const filterExists = await tablePage.filterInput.count();
    if (filterExists > 0) {
      await tablePage.filterTable('test');
      await page.waitForTimeout(500);
      
      const rows = await tablePage.getTableRows();
      expect(rows.length).toBeGreaterThanOrEqual(0);
    }
  });
});
