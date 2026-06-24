const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ButtonInteractionsPage } = require('../../pages/button-interactions-page');

let buttonPage;

Before({ tags: '@button-interactions', order: 1 }, async function() {
  buttonPage = new ButtonInteractionsPage(this.page);
  this.buttonClickHandler = async (buttonText) => {
    const buttonMap = {
      'Primary Button': () => buttonPage.clickPrimaryButton(),
      'Click Me!': () => buttonPage.clickCounterButton(),
      'Enable/Disable Button': () => buttonPage.toggleDisabledButton(),
      'Add New Button': () => buttonPage.addDynamicButton(),
      'Remove Last Button': () => buttonPage.removeLastButton(),
      'Click Me (3s delay)': () => buttonPage.waitForDelayButtonResponse(),
    };

    const action = buttonMap[buttonText];
    if (action) {
      await action();
    } else {
      await this.page.click(`button:has-text("${buttonText}")`);
    }
  };
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

Then('I should see {string} in the message', async function(text) {
  await expect(buttonPage.rightClickMessage).toContainText(text);
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

Given('the click count is {string}', async function(count) {
  const currentCount = await buttonPage.getClickCount();
  // Verify or set initial count if needed
});

Then('the click count should be {string}', async function(expectedCount) {
  await expect(buttonPage.clickCount).toHaveText(expectedCount);
});
