const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { HomePage } = require('../../pages/home-page');

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
  if (this.linkClickHandler) {
    await this.linkClickHandler(linkText);
    return;
  }
  await this.page.click(`a:has-text("${linkText}")`);
});

When('I click on the {string} button', async function(buttonText) {
  if (this.buttonClickHandler) {
    await this.buttonClickHandler(buttonText);
    return;
  }
  await this.page.click(`button:has-text("${buttonText}")`);
});

When('I wait for {string} seconds', async function(seconds) {
  await this.page.waitForTimeout(parseInt(seconds, 10) * 1000);
});

Then('I should see {string}', async function(text) {
  const heading = this.page.locator('h2').filter({ hasText: text });
  if (await heading.count() > 0) {
    await expect(heading.first()).toBeVisible();
    return;
  }
  await expect(this.page.getByText(text, { exact: false }).first()).toBeVisible();
});

Then('I should be on the {string} page', async function(pageName) {
  await expect(this.page).toHaveURL(new RegExp(`.*${pageName}\\.html`));
});

Then('I should not see {string}', async function(text) {
  await expect(this.page.locator(`text=${text}`)).not.toBeVisible();
});
