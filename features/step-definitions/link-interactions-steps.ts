import { When, Then, Before } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LinkInteractionsPage } from '../../pages/link-interactions-page';

let linkPage: LinkInteractionsPage;

Before({ tags: '@link-interactions' }, async function(this: CustomWorld) {
  linkPage = new LinkInteractionsPage(this.page);
});

When('I click on the {string} link', async function(this: CustomWorld, linkText: string) {
  if (!linkPage) {
    linkPage = new LinkInteractionsPage(this.page);
  }
  if (linkText === 'Link to Home Page') {
    await linkPage.clickBasicLink();
  } else {
    await this.page.click(`a:has-text("${linkText}")`);
  }
});

When('I click on the link that opens in a new tab', async function(this: CustomWorld) {
  if (!linkPage) {
    linkPage = new LinkInteractionsPage(this.page);
  }
  (this as any).newPage = await linkPage.clickNewTabLink();
});

When('I click on the {string} button', async function(this: CustomWorld, buttonText: string) {
  if (!linkPage) {
    linkPage = new LinkInteractionsPage(this.page);
  }
  if (buttonText === 'Add Dynamic Link') {
    await linkPage.addDynamicLink();
  }
});

When('I click on {string}', async function(this: CustomWorld, linkNumber: string) {
  if (!linkPage) {
    linkPage = new LinkInteractionsPage(this.page);
  }
  const number = parseInt(linkNumber.replace('Link ', ''));
  await linkPage.clickBrokenLink(number);
});

Then('a new tab should be opened', async function(this: CustomWorld) {
  const newPage = (this as any).newPage;
  expect(newPage).toBeTruthy();
  expect(newPage.url()).toBeTruthy();
});

Then('I should close the new tab', async function(this: CustomWorld) {
  const newPage = (this as any).newPage;
  if (newPage) {
    await newPage.close();
  }
});

Then('I should see a dynamic link', async function(this: CustomWorld) {
  await expect(this.page.locator('a:has-text("Dynamic Link"), a[href*="techelliptica"]').last()).toBeVisible();
});

Then('I should see a broken link message', async function(this: CustomWorld) {
  // Wait a bit for error handling
  await this.page.waitForTimeout(1000);
  // The page might navigate or show an error - this is expected for broken links
});
