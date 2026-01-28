const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ButtonInteractionsPage } = require('../../../pages/button-interactions-page');

let buttonPage;

Before({ tags: '@button-interactions' }, async function() {
  buttonPage = new ButtonInteractionsPage(this.page);
});

When('I click on the {string} button', async function(buttonText) {
  if (!buttonPage) {
    buttonPage = new (require('../../../pages/button-interactions-page').ButtonInteractionsPage)(this.page);
  }
  
  const buttonMap = {
    'Primary Button': () => buttonPage.clickPrimaryButton(),
    'Click Me!': () => buttonPage.clickCounterButton(),
    'Enable/Disable Button': () => buttonPage.toggleDisabledButton(),
    'Add New Button': () => buttonPage.addDynamicButton(),
    'Remove Last Button': () => buttonPage.removeLastButton(),
    'Click Me (3s delay)': () => buttonPage.waitForDelayButtonResponse()
  };
  
  const action = buttonMap[buttonText];
  if (action) {
    await action();
  } else {
    await this.page.click(`button:has-text("${buttonText}")`);
  }
});

When('I double click on the {string} button', async function(buttonText) {
  await buttonPage.doubleClickButton();
});

When('I right click on the {string} button', async function(buttonText) {
  await buttonPage.rightClickButton();
});

When('I select {string} from the context menu', async function(option) {
  await buttonPage.selectContextMenuOption(option);
});

When('I wait for {string} seconds', async function(seconds) {
  await this.page.waitForTimeout(parseInt(seconds) * 1000);
});

Then('I should see {string}', async function(text) {
  await expect(this.page.locator(`text=${text}`)).toBeVisible();
});

Then('I should see {string} in the message', async function(text) {
  await expect(buttonPage.basicMessage).toContainText(text);
});

Then('I should see {string} in the delay message', async function(text) {
  await expect(buttonPage.delayMessage).toContainText(text);
});

Then('the {string} button should be disabled', async function(buttonText) {
  await expect(buttonPage.disabledBtn).toBeDisabled();
});

Then('the {string} button should be enabled', async function(buttonText) {
  await expect(buttonPage.disabledBtn).toBeEnabled();
});

Then('I should see the context menu', async function() {
  await expect(buttonPage.contextMenu).toBeVisible();
});

Then('I should not see {string}', async function(text) {
  await expect(this.page.locator(`text=${text}`)).not.toBeVisible();
});

Given('the click count is {string}', async function(count) {
  const currentCount = await buttonPage.getClickCount();
  // Verify or set initial count if needed
});

Then('the click count should be {string}', async function(expectedCount) {
  await expect(buttonPage.clickCount).toHaveText(expectedCount);
});
