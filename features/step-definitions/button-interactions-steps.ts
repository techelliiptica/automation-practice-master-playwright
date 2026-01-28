import { Given, When, Then, Before } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { ButtonInteractionsPage } from '../../pages/button-interactions-page';

let buttonPage: ButtonInteractionsPage;

Before({ tags: '@button-interactions' }, async function(this: CustomWorld) {
  buttonPage = new ButtonInteractionsPage(this.page);
});

When('I click on the {string} button', async function(this: CustomWorld, buttonText: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  
  const buttonMap: { [key: string]: () => Promise<void> } = {
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

When('I double click on the {string} button', async function(this: CustomWorld, buttonText: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await buttonPage.doubleClickButton();
});

When('I right click on the {string} button', async function(this: CustomWorld, buttonText: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await buttonPage.rightClickButton();
});

When('I select {string} from the context menu', async function(this: CustomWorld, option: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await buttonPage.selectContextMenuOption(option);
});

When('I wait for {string} seconds', async function(this: CustomWorld, seconds: string) {
  await this.page.waitForTimeout(parseInt(seconds) * 1000);
});

Then('I should see {string} in the message', async function(this: CustomWorld, text: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await expect(buttonPage.basicMessage).toContainText(text);
});

Then('I should see {string} in the delay message', async function(this: CustomWorld, text: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await expect(buttonPage.delayMessage).toContainText(text);
});

Then('the {string} button should be disabled', async function(this: CustomWorld, buttonText: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await expect(buttonPage.disabledBtn).toBeDisabled();
});

Then('the {string} button should be enabled', async function(this: CustomWorld, buttonText: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await expect(buttonPage.disabledBtn).toBeEnabled();
});

Then('I should see the context menu', async function(this: CustomWorld) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await expect(buttonPage.contextMenu).toBeVisible();
});

Given('the click count is {string}', async function(this: CustomWorld, count: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  // Verify or set initial count if needed
});

Then('the click count should be {string}', async function(this: CustomWorld, expectedCount: string) {
  if (!buttonPage) {
    buttonPage = new ButtonInteractionsPage(this.page);
  }
  await expect(buttonPage.clickCount).toHaveText(expectedCount);
});
