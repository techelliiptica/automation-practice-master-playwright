import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class DatePickerPage extends BasePage {
  readonly dateInput: Locator;
  readonly datePickerButton: Locator;
  readonly calendar: Locator;
  readonly todayButton: Locator;

  constructor(page: Page) {
    super(page);
    this.dateInput = page.locator('#dateInput');
    this.datePickerButton = page.locator('#dateInput');
    this.calendar = page.locator('.calendar, .datepicker');
    this.todayButton = page.locator('button:has-text("Today")');
  }

  async selectDate(date: string) {
    await this.dateInput.fill(date);
  }

  async openDatePicker() {
    await this.dateInput.click();
  }

  async selectToday() {
    const today = new Date().toISOString().split('T')[0];
    await this.dateInput.fill(today);
  }
}
