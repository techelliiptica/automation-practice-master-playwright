const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { DropdownSelectPage } = require('../../../pages/dropdown-select-page');

let dropdownPage;

Before({ tags: '@dropdown-select' }, async function() {
  dropdownPage = new DropdownSelectPage(this.page);
});

When('I select {string} from the country dropdown', async function(country) {
  const countryMap = {
    'United States': 'usa',
    'United Kingdom': 'uk',
    'Canada': 'canada'
  };
  const value = countryMap[country] || country.toLowerCase();
  await dropdownPage.selectOption(value);
});

Then('the selected country should be {string}', async function(expectedValue) {
  const selectedValue = await dropdownPage.getSelectedValue();
  expect(selectedValue).toBe(expectedValue);
});

When('I select {string} and {string} from the languages dropdown', async function(lang1, lang2) {
  await dropdownPage.selectMultipleOptions([lang1.toLowerCase(), lang2.toLowerCase()]);
});

Then('I should see the selected languages displayed', async function() {
  await expect(dropdownPage.resultDisplay.first()).toBeVisible();
});
