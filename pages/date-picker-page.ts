import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class DatePickerPage extends BasePage {
  readonly dateInput: Locator;
  readonly datePickerButton: Locator;
  readonly calendar: Locator;
  readonly todayButton: Locator;

  constructor(page: Page) {
    super(page);
    this.dateInput = page.locator('input[type="date"]').first();
    this.datePickerButton = page.locator('button:has-text("Pick Date"), .date-picker-button').first();
    this.calendar = page.locator('.calendar, .datepicker');
    this.todayButton = page.locator('button:has-text("Today")');
  }

  async selectDate(date: string) {
    await this.dateInput.fill(date);
  }

  async openDatePicker() {
    await this.datePickerButton.click();
  }

  async selectToday() {
    await this.todayButton.click();
  }
}
