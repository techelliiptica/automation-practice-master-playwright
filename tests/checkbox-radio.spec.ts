import { test, expect } from '@playwright/test';
import { CheckboxRadioPage } from '../pages/checkbox-radio-page';

test.describe('Checkbox & Radio', () => {
  test.beforeEach(async ({ page }) => {
    const checkboxPage = new CheckboxRadioPage(page);
    await checkboxPage.navigateTo('/checkbox-radio.html');
  });

  test('should check and uncheck checkboxes', async ({ page }) => {
    const checkboxPage = new CheckboxRadioPage(page);
    
    await checkboxPage.checkCheckbox('checkbox1');
    expect(await checkboxPage.isCheckboxChecked('checkbox1')).toBeTruthy();
    
    await checkboxPage.uncheckCheckbox('checkbox1');
    expect(await checkboxPage.isCheckboxChecked('checkbox1')).toBeFalsy();
  });

  test('should select radio option', async ({ page }) => {
    const checkboxPage = new CheckboxRadioPage(page);
    
    await checkboxPage.selectRadioOption('radio1');
    expect(await checkboxPage.isCheckboxChecked('radio1')).toBeTruthy();
    
    await checkboxPage.selectRadioOption('radio2');
    expect(await checkboxPage.isCheckboxChecked('radio1')).toBeFalsy();
    expect(await checkboxPage.isCheckboxChecked('radio2')).toBeTruthy();
  });
});
