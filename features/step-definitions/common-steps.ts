import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { HomePage } from '../../pages/home-page';

Given('I am on the home page', async function(this: CustomWorld) {
  const homePage = new HomePage(this.page);
  await homePage.navigate();
  await expect(homePage.headerTitle).toBeVisible();
});

Given('I navigate to {string}', async function(this: CustomWorld, pageName: string) {
  await this.page.goto(`/${pageName}.html`, { waitUntil: 'domcontentloaded' });
  await this.page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
});

When('I click on {string}', async function(this: CustomWorld, elementText: string) {
  await this.page.click(`text=${elementText}`);
});

When('I click on the {string} link', async function(this: CustomWorld, linkText: string) {
  await this.page.click(`a:has-text("${linkText}")`);
});

Then('I should see {string}', async function(this: CustomWorld, text: string) {
  await expect(this.page.locator(`text=${text}`)).toBeVisible();
});

Then('I should be on the {string} page', async function(this: CustomWorld, pageName: string) {
  await expect(this.page).toHaveURL(new RegExp(`.*${pageName}\\.html`));
});

Then('I should not see {string}', async function(this: CustomWorld, text: string) {
  await expect(this.page.locator(`text=${text}`)).not.toBeVisible();
});
