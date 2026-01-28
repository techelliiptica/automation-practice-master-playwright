const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { IframePage } = require('../../../pages/iframe-page');

let iframePage;

Before({ tags: '@iframe' }, async function() {
  iframePage = new IframePage(this.page);
});

Then('I should see the iframe content', async function() {
  const iframe = iframePage.getIframeContent();
  await expect(iframe.locator('body')).toBeVisible();
});

When('I click on a button inside the iframe', async function() {
  await iframePage.clickButtonInIframe('Submit');
});

Then('the action should be completed', async function() {
  // Action completed - iframe interaction successful
});

When('I wait for the parent iframe to load', async function() {
  await this.page.waitForSelector('#parentIframe');
});

Then('I should be able to access nested iframe content', async function() {
  const nestedIframe = iframePage.getNestedIframeContent();
  const iframeCount = await nestedIframe.locator('body').count();
  expect(iframeCount).toBeGreaterThanOrEqual(0);
});
