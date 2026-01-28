const { BasePage } = require('../utils/base-page');

class TableDataPage extends BasePage {
  constructor(page) {
    super(page);
    this.table = page.locator('#basicTable');
    this.sortButton = page.locator('button:has-text("Sort")');
    this.filterInput = page.locator('#filterInput, input[type="search"], input[placeholder*="filter" i]');
    this.paginationNext = page.locator('button:has-text("Next")');
    this.paginationPrev = page.locator('button:has-text("Previous")');
  }

  async getTableRows() {
    return await this.table.locator('tbody tr').all();
  }

  async getCellText(rowIndex, columnIndex) {
    return await this.table.locator(`tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${columnIndex + 1})`).first().textContent();
  }

  async sortTable() {
    await this.sortButton.click();
  }

  async filterTable(text) {
    await this.filterInput.fill(text);
  }
}

module.exports = { TableDataPage };
