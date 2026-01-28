const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { DynamicContentPage } = require('../../../pages/dynamic-content-page');

let dynamicPage;

Before({ tags: '@dynamic-content' }, async function() {
  dynamicPage = new DynamicContentPage(this.page);
});

When('I click on the {string} button', async function(buttonText) {
  if (!dynamicPage) {
    dynamicPage = new (require('../../../pages/dynamic-content-page').DynamicContentPage)(this.page);
  }
  
  if (buttonText === 'Add Item') {
    await dynamicPage.addDynamicElement();
  } else if (buttonText === 'Clear All') {
    await dynamicPage.removeDynamicElement();
  } else if (buttonText === 'Load Content (3 second delay)') {
    await dynamicPage.clickDelayedButton();
  }
});

When('I wait for {string} second', async function(seconds) {
  await this.page.waitForTimeout(parseInt(seconds) * 1000);
});

When('I wait for {string} seconds', async function(seconds) {
  await this.page.waitForTimeout(parseInt(seconds) * 1000);
});

Then('I should see a new list item', async function() {
  await expect(this.page.locator('#dynamicList .list-item, #dynamicList li')).toBeVisible();
});

Then('I should not see any list items', async function() {
  await expect(this.page.locator('#dynamicList .list-item, #dynamicList li')).not.toBeVisible();
});

Then('I should see content loaded after delay', async function() {
  await expect(this.page.locator('#delayedContent')).not.toContainText('Click the button');
});
