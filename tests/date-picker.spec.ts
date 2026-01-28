import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../pages/date-picker-page';

test.describe('Date Picker', () => {
  test.beforeEach(async ({ page }) => {
    const datePage = new DatePickerPage(page);
    await datePage.navigateTo('/date-picker.html');
  });

  test('should select date using input', async ({ page }) => {
    const datePage = new DatePickerPage(page);
    
    await datePage.selectDate('2024-06-15');
    const value = await datePage.dateInput.inputValue();
    expect(value).toBe('2024-06-15');
  });

  test('should open date picker calendar', async ({ page }) => {
    const datePage = new DatePickerPage(page);
    
    await datePage.openDatePicker();
    await expect(datePage.calendar).toBeVisible();
  });

  test('should select today date', async ({ page }) => {
    const datePage = new DatePickerPage(page);
    
    await datePage.openDatePicker();
    await datePage.selectToday();
    
    const today = new Date().toISOString().split('T')[0];
    const value = await datePage.dateInput.inputValue();
    expect(value).toBe(today);
  });
});
