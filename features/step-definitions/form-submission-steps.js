const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { FormSubmissionPage } = require('../../../pages/form-submission-page');

let formPage;

Before({ tags: '@form-submission' }, async function() {
  formPage = new FormSubmissionPage(this.page);
});

When('I fill in {string} with {string}', async function(fieldLabel, value) {
  if (!formPage) {
    formPage = new (require('../../../pages/form-submission-page').FormSubmissionPage)(this.page);
  }
  
  const fieldMap = {
    'Full Name': formPage.nameInput,
    'Email Address': formPage.emailInput,
    'Password': formPage.passwordInput,
    'Bio / About Me': formPage.messageTextarea
  };
  
  const field = fieldMap[fieldLabel];
  if (field) {
    await field.fill(value);
  }
});

When('I click on the {string} button', async function(buttonText) {
  if (!formPage) {
    formPage = new (require('../../../pages/form-submission-page').FormSubmissionPage)(this.page);
  }
  
  if (buttonText === 'Submit Form') {
    await formPage.submitForm();
  } else {
    await this.page.click(`button:has-text("${buttonText}")`);
  }
});

Then('I should see {string} in the form result', async function(text) {
  if (!formPage) {
    formPage = new (require('../../../pages/form-submission-page').FormSubmissionPage)(this.page);
  }
  const result = await formPage.getResultText();
  expect(result).toContain(text);
});

Then('the {string} field should be required', async function(fieldLabel) {
  const fieldMap = {
    'Full Name': formPage.nameInput,
    'Email Address': formPage.emailInput,
    'Password': formPage.passwordInput
  };
  
  const field = fieldMap[fieldLabel];
  if (field) {
    const isRequired = await field.getAttribute('required');
    expect(isRequired).toBeTruthy();
  }
});
