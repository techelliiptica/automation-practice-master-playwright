import { When, Then, Before } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { DropdownSelectPage } from '../../pages/dropdown-select-page';

let dropdownPage: DropdownSelectPage;

Before({ tags: '@dropdown-select' }, async function(this: CustomWorld) {
  dropdownPage = new DropdownSelectPage(this.page);
});

When('I select {string} from the country dropdown', async function(this: CustomWorld, country: string) {
  if (!dropdownPage) {
    dropdownPage = new DropdownSelectPage(this.page);
  }
  
  const countryMap: { [key: string]: string } = {
    'United States': 'usa',
    'United Kingdom': 'uk',
    'Canada': 'canada'
  };
  const value = countryMap[country] || country.toLowerCase();
  await dropdownPage.selectOption(value);
});

Then('the selected country should be {string}', async function(this: CustomWorld, expectedValue: string) {
  if (!dropdownPage) {
    dropdownPage = new DropdownSelectPage(this.page);
  }
  const selectedValue = await dropdownPage.getSelectedValue();
  expect(selectedValue).toBe(expectedValue);
});

When('I select {string} and {string} from the languages dropdown', async function(this: CustomWorld, lang1: string, lang2: string) {
  if (!dropdownPage) {
    dropdownPage = new DropdownSelectPage(this.page);
  }
  await dropdownPage.selectMultipleOptions([lang1.toLowerCase(), lang2.toLowerCase()]);
});

Then('I should see the selected languages displayed', async function(this: CustomWorld) {
  if (!dropdownPage) {
    dropdownPage = new DropdownSelectPage(this.page);
  }
  await expect(dropdownPage.resultDisplay.first()).toBeVisible();
});
