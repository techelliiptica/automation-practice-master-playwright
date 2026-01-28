import { When, Then, Before } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { FormSubmissionPage } from '../../pages/form-submission-page';

let formPage: FormSubmissionPage;

Before({ tags: '@form-submission' }, async function(this: CustomWorld) {
  formPage = new FormSubmissionPage(this.page);
});

When('I fill in {string} with {string}', async function(this: CustomWorld, fieldLabel: string, value: string) {
  if (!formPage) {
    formPage = new FormSubmissionPage(this.page);
  }
  
  const fieldMap: { [key: string]: any } = {
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

When('I click on the {string} button', async function(this: CustomWorld, buttonText: string) {
  if (!formPage) {
    formPage = new FormSubmissionPage(this.page);
  }
  
  if (buttonText === 'Submit Form') {
    await formPage.submitForm();
  } else {
    await this.page.click(`button:has-text("${buttonText}")`);
  }
});

Then('I should see {string} in the form result', async function(this: CustomWorld, text: string) {
  if (!formPage) {
    formPage = new FormSubmissionPage(this.page);
  }
  const result = await formPage.getResultText();
  expect(result).toContain(text);
});

Then('the {string} field should be required', async function(this: CustomWorld, fieldLabel: string) {
  if (!formPage) {
    formPage = new FormSubmissionPage(this.page);
  }
  
  const fieldMap: { [key: string]: any } = {
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
