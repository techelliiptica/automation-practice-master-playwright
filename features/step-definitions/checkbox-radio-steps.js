const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { CheckboxRadioPage } = require('../../../pages/checkbox-radio-page');

let checkboxPage;

Before({ tags: '@checkbox-radio' }, async function() {
  checkboxPage = new CheckboxRadioPage(this.page);
});

When('I check the {string} checkbox', async function(optionText) {
  const optionMap = {
    'Option 1': 'checkbox1',
    'Option 2': 'checkbox2',
    'Option 3': 'checkbox3'
  };
  const id = optionMap[optionText] || optionText.toLowerCase().replace(' ', '');
  await checkboxPage.checkCheckbox(id);
});

When('I uncheck the {string} checkbox', async function(optionText) {
  const optionMap = {
    'Option 1': 'checkbox1',
    'Option 2': 'checkbox2',
    'Option 3': 'checkbox3'
  };
  const id = optionMap[optionText] || optionText.toLowerCase().replace(' ', '');
  await checkboxPage.uncheckCheckbox(id);
});

Then('the {string} checkbox should be checked', async function(optionText) {
  const optionMap = {
    'Option 1': 'checkbox1',
    'Option 2': 'checkbox2',
    'Option 3': 'checkbox3'
  };
  const id = optionMap[optionText] || optionText.toLowerCase().replace(' ', '');
  const isChecked = await checkboxPage.isCheckboxChecked(id);
  expect(isChecked).toBeTruthy();
});

Then('the {string} checkbox should be unchecked', async function(optionText) {
  const optionMap = {
    'Option 1': 'checkbox1',
    'Option 2': 'checkbox2',
    'Option 3': 'checkbox3'
  };
  const id = optionMap[optionText] || optionText.toLowerCase().replace(' ', '');
  const isChecked = await checkboxPage.isCheckboxChecked(id);
  expect(isChecked).toBeFalsy();
});

When('I select the {string} radio button', async function(choiceText) {
  const value = choiceText.toLowerCase().replace(' ', '');
  await checkboxPage.selectRadioOption(value);
});

Then('the {string} radio button should be selected', async function(choiceText) {
  const value = choiceText.toLowerCase().replace(' ', '');
  const isChecked = await checkboxPage.isRadioChecked(value);
  expect(isChecked).toBeTruthy();
});

Then('the {string} radio button should not be selected', async function(choiceText) {
  const value = choiceText.toLowerCase().replace(' ', '');
  const isChecked = await checkboxPage.isRadioChecked(value);
  expect(isChecked).toBeFalsy();
});
