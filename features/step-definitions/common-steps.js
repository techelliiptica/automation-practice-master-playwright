const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { HomePage } = require('../../../pages/home-page');

Given('I am on the home page', async function() {
  const homePage = new HomePage(this.page);
  await homePage.navigate();
  await expect(homePage.headerTitle).toBeVisible();
});

Given('I navigate to {string}', async function(pageName) {
  await this.page.goto(`/${pageName}.html`, { waitUntil: 'domcontentloaded' });
  await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
});

When('I click on {string}', async function(elementText) {
  await this.page.click(`text=${elementText}`);
});

// Generic button click - will be overridden by specific step definitions when needed
When('I click on the generic {string} button', async function(buttonText) {
  await this.page.click(`button:has-text("${buttonText}")`);
});

When('I click on the {string} link', async function(linkText) {
  await this.page.click(`a:has-text("${linkText}")`);
});

Then('I should see {string}', async function(text) {
  await expect(this.page.locator(`text=${text}`)).toBeVisible();
});

Then('I should be on the {string} page', async function(pageName) {
  await expect(this.page).toHaveURL(new RegExp(`.*${pageName}\\.html`));
});

Then('I should not see {string}', async function(text) {
  await expect(this.page.locator(`text=${text}`)).not.toBeVisible();
});
