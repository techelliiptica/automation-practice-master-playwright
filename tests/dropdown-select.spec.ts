import { test, expect } from '@playwright/test';
import { DropdownSelectPage } from '../pages/dropdown-select-page';

test.describe('Dropdown & Select', () => {
  test.beforeEach(async ({ page }) => {
    const dropdownPage = new DropdownSelectPage(page);
    await dropdownPage.navigateTo('/dropdown-select.html');
  });

  test('should select option from single select', async ({ page }) => {
    const dropdownPage = new DropdownSelectPage(page);
    
    await dropdownPage.selectOption('option2');
    const selectedValue = await dropdownPage.getSelectedValue();
    expect(selectedValue).toBe('option2');
  });

  test('should select multiple options', async ({ page }) => {
    const dropdownPage = new DropdownSelectPage(page);
    
    await dropdownPage.selectMultipleOptions(['option1', 'option3']);
    await expect(dropdownPage.resultDisplay).toBeVisible();
  });
});
