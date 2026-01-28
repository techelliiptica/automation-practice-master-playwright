const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { DatePickerPage } = require('../../../pages/date-picker-page');

let datePage;

Before({ tags: '@date-picker' }, async function() {
  datePage = new DatePickerPage(this.page);
});

When('I select date {string}', async function(date) {
  await datePage.selectDate(date);
});

Then('the date input should contain {string}', async function(expectedDate) {
  const value = await datePage.dateInput.inputValue();
  expect(value).toBe(expectedDate);
});

When('I click on the date input', async function() {
  await datePage.openDatePicker();
});

Then('the date input should be visible', async function() {
  await expect(datePage.dateInput).toBeVisible();
});

When('I select today\'s date', async function() {
  await datePage.selectToday();
});

Then('the date input should contain today\'s date', async function() {
  const today = new Date().toISOString().split('T')[0];
  const value = await datePage.dateInput.inputValue();
  expect(value).toBe(today);
});
