const { BasePage } = require('../utils/base-page');

class DatePickerPage extends BasePage {
  constructor(page) {
    super(page);
    this.dateInput = page.locator('#dateInput');
    this.datePickerButton = page.locator('#dateInput');
    this.calendar = page.locator('.calendar, .datepicker');
    this.todayButton = page.locator('button:has-text("Today")');
  }

  async selectDate(date) {
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

module.exports = { DatePickerPage };
