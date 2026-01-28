const { test, expect } = require('@playwright/test');
const { CheckboxRadioPage } = require('../pages/checkbox-radio-page');

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
    
    await checkboxPage.selectRadioOption('choice1');
    expect(await checkboxPage.isRadioChecked('choice1')).toBeTruthy();
    
    await checkboxPage.selectRadioOption('choice2');
    expect(await checkboxPage.isRadioChecked('choice1')).toBeFalsy();
    expect(await checkboxPage.isRadioChecked('choice2')).toBeTruthy();
  });
});
