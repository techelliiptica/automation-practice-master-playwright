import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class TableDataPage extends BasePage {
  readonly table: Locator;
  readonly sortButton: Locator;
  readonly filterInput: Locator;
  readonly paginationNext: Locator;
  readonly paginationPrev: Locator;

  constructor(page: Page) {
    super(page);
    this.table = page.locator('table');
    this.sortButton = page.locator('button:has-text("Sort")');
    this.filterInput = page.locator('input[type="search"], input[placeholder*="filter" i]');
    this.paginationNext = page.locator('button:has-text("Next")');
    this.paginationPrev = page.locator('button:has-text("Previous")');
  }

  async getTableRows() {
    return await this.table.locator('tbody tr').all();
  }

  async getCellText(rowIndex: number, columnIndex: number) {
    return await this.table.locator(`tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${columnIndex + 1})`).textContent();
  }

  async sortTable() {
    await this.sortButton.click();
  }

  async filterTable(text: string) {
    await this.filterInput.fill(text);
  }
}
