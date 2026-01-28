const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { AlertsModalsPage } = require('../../../pages/alerts-modals-page');

let alertsPage;

Before({ tags: '@alerts-modals' }, async function() {
  alertsPage = new AlertsModalsPage(this.page);
});

When('I click on the {string} button', async function(buttonText) {
  if (!alertsPage) {
    alertsPage = new (require('../../../pages/alerts-modals-page').AlertsModalsPage)(this.page);
  }
  
  if (buttonText === 'Show Alert') {
    this.page.on('dialog', async dialog => {
      this.dialog = dialog;
      await dialog.accept();
    });
    await alertsPage.clickAlertButton();
  } else if (buttonText === 'Show Confirm') {
    // Dialog handler will be set in Then step
    await alertsPage.clickConfirmButton();
  } else if (buttonText === 'Show Prompt') {
    this.page.on('dialog', async dialog => {
      this.dialog = dialog;
      await dialog.accept(this.promptValue || 'Test input');
    });
    await alertsPage.clickPromptButton();
  } else if (buttonText === 'Open Simple Modal') {
    await alertsPage.openModal();
  }
});

When('I click on the close button', async function() {
  await alertsPage.closeModal();
});

When('I enter {string} in the prompt', async function(value) {
  this.promptValue = value;
});

Then('I should handle the alert dialog', async function() {
  // Dialog is already handled in When step
  expect(this.dialog).toBeTruthy();
});

Then('I should accept the confirm dialog', async function() {
  this.page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    await dialog.accept();
  });
});

Then('I should dismiss the confirm dialog', async function() {
  this.page.on('dialog', async dialog => {
    await dialog.dismiss();
  });
});

Then('I should accept the prompt dialog', async function() {
  // Already handled in When step
});

Then('I should see the modal', async function() {
  const modal = await alertsPage.getModal('simpleModal');
  await expect(modal).toBeVisible();
});

Then('I should not see the modal', async function() {
  const modal = await alertsPage.getModal('simpleModal');
  await expect(modal).not.toBeVisible();
});
