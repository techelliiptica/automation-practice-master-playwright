const { test, expect } = require('@playwright/test');
const { DropdownSelectPage } = require('../pages/dropdown-select-page');

test.describe('Dropdown & Select', () => {
  test.beforeEach(async ({ page }) => {
    const dropdownPage = new DropdownSelectPage(page);
    await dropdownPage.navigateTo('/dropdown-select.html');
  });

  test('should select option from single select', async ({ page }) => {
    const dropdownPage = new DropdownSelectPage(page);
    
    await dropdownPage.selectOption('usa');
    const selectedValue = await dropdownPage.getSelectedValue();
    expect(selectedValue).toBe('usa');
  });

  test('should select multiple options', async ({ page }) => {
    const dropdownPage = new DropdownSelectPage(page);
    
    await dropdownPage.selectMultipleOptions(['javascript', 'python']);
    await expect(dropdownPage.resultDisplay.first()).toBeVisible();
  });
});
