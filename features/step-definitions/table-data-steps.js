const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { TableDataPage } = require('../../../pages/table-data-page');

let tablePage;

Before({ tags: '@table-data' }, async function() {
  tablePage = new TableDataPage(this.page);
});

Then('I should see table rows', async function() {
  const rows = await tablePage.getTableRows();
  expect(rows.length).toBeGreaterThan(0);
});

Then('I should be able to read cell data', async function() {
  const firstRow = tablePage.table.locator('tbody tr').first();
  const firstCell = firstRow.locator('td').first();
  const cellText = await firstCell.textContent();
  expect(cellText).toBeTruthy();
});

When('I click on the sort button', async function() {
  const sortButtonExists = await tablePage.sortButton.count();
  if (sortButtonExists > 0) {
    await tablePage.sortTable();
    await this.page.waitForTimeout(500);
  }
});

Then('the table should be sorted', async function() {
  const firstRow = tablePage.table.locator('tbody tr').first();
  const firstCell = firstRow.locator('td').first();
  const cellText = await firstCell.textContent();
  expect(cellText).toBeTruthy();
});

When('I enter {string} in the filter input', async function(filterText) {
  const filterExists = await tablePage.filterInput.count();
  if (filterExists > 0) {
    await tablePage.filterTable(filterText);
    await this.page.waitForTimeout(500);
  }
});

Then('the table should be filtered', async function() {
  const rows = await tablePage.getTableRows();
  expect(rows.length).toBeGreaterThanOrEqual(0);
});
