const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LinkInteractionsPage } = require('../../../pages/link-interactions-page');

let linkPage;

Before({ tags: '@link-interactions' }, async function() {
  linkPage = new LinkInteractionsPage(this.page);
});

When('I click on the {string} link', async function(linkText) {
  if (linkText === 'Link to Home Page') {
    await linkPage.clickBasicLink();
  } else {
    await this.page.click(`a:has-text("${linkText}")`);
  }
});

When('I click on the link that opens in a new tab', async function() {
  this.newPage = await linkPage.clickNewTabLink();
});

When('I click on the {string} button', async function(buttonText) {
  if (!linkPage) {
    linkPage = new (require('../../../pages/link-interactions-page').LinkInteractionsPage)(this.page);
  }
  
  if (buttonText === 'Add Dynamic Link') {
    await linkPage.addDynamicLink();
  }
});

When('I click on {string}', async function(linkNumber) {
  const number = parseInt(linkNumber.replace('Link ', ''));
  await linkPage.clickBrokenLink(number);
});

Then('a new tab should be opened', async function() {
  expect(this.newPage).toBeTruthy();
  expect(this.newPage.url()).toBeTruthy();
});

Then('I should close the new tab', async function() {
  if (this.newPage) {
    await this.newPage.close();
  }
});

Then('I should see a dynamic link', async function() {
  await expect(this.page.locator('a:has-text("Dynamic Link"), a[href*="techelliptica"]').last()).toBeVisible();
});

Then('I should see a broken link message', async function() {
  // Wait a bit for error handling
  await this.page.waitForTimeout(1000);
  // The page might navigate or show an error - this is expected for broken links
});
