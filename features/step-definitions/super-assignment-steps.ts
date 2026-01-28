import { When, Then, Before, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { SuperAssignmentPage } from '../../pages/super-assignment-page';
import * as path from 'path';

let superPage: SuperAssignmentPage;

Before({ tags: '@super-assignment' }, async function(this: CustomWorld) {
  superPage = new SuperAssignmentPage(this.page);
});

When('I fill in personal information:', async function(this: CustomWorld, dataTable: DataTable) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  const data = dataTable.rowsHash();
  await superPage.fillPersonalInfo(
    data['First Name'],
    data['Last Name'],
    data['Email'],
    data['Phone']
  );
});

When('I select {string} as position', async function(this: CustomWorld, position: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.selectPosition(position);
});

When('I select {string} as experience level', async function(this: CustomWorld, level: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.selectExperienceLevel(level);
});

When('I select {string} as location', async function(this: CustomWorld, location: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.selectLocation(location);
});

When('I select {string} as country', async function(this: CustomWorld, country: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.selectCountry(country);
});

When('I select {string} as available start date', async function(this: CustomWorld, date: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.selectDate(date);
});

When('I select {string} as employment type', async function(this: CustomWorld, type: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.selectEmploymentType(type as any);
});

When('I select {string} as work preference', async function(this: CustomWorld, preference: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.selectWorkPreference(preference as any);
});

When('I select the following skills:', async function(this: CustomWorld, dataTable: DataTable) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  const skills = dataTable.raw().map(row => row[0]);
  await superPage.selectSkills(skills);
});

When('I select the following languages:', async function(this: CustomWorld, dataTable: DataTable) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  const languages = dataTable.raw().map(row => row[0]);
  await superPage.selectLanguages(languages);
});

When('I fill in cover letter with {string}', async function(this: CustomWorld, text: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.coverLetterTextarea.fill(text);
});

When('I upload a resume file', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  const resumePath = path.join(__dirname, '../../../test-data/sample-resume.pdf');
  await superPage.uploadResume(resumePath);
});

When('I accept the terms and conditions', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.acceptTerms();
});

Then('the progress bar should show {string}', async function(this: CustomWorld, expectedProgress: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  const progress = await superPage.getProgressPercentage();
  expect(progress).toBe(expectedProgress);
});

Then('the progress bar should be greater than {string}', async function(this: CustomWorld, minProgress: string) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  const progress = await superPage.getProgressPercentage();
  expect(parseInt(progress || '0')).toBeGreaterThan(parseInt(minProgress));
});

When('I submit the form', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.submitForm();
});

Then('I should see the loader', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await expect(superPage.loaderOverlay).toBeVisible();
});

Then('I should see my submission in the table', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.waitForLoader();
  const rowCount = await superPage.getTableRowCount();
  expect(rowCount).toBeGreaterThan(0);
});

When('I click on the submit button', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.submitButton.click();
});

Then('I should see validation errors for required fields', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await expect(superPage.firstNameInput).toBeVisible();
});

Then('I should see the download button', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await expect(superPage.downloadBtn).toBeVisible();
});

When('I click on the download button', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  const [download] = await Promise.all([
    this.page.waitForEvent('download'),
    superPage.downloadFile()
  ]);
  (this as any).download = download;
});

Then('the file should be downloaded', async function(this: CustomWorld) {
  const download = (this as any).download;
  expect(download.suggestedFilename()).toBeTruthy();
});

When('I fill all required fields', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await superPage.fillPersonalInfo('Test', 'User', 'test@example.com', '+1-234-567-8900');
  await superPage.selectPosition('Software Engineer');
  await superPage.selectExperienceLevel('Entry Level (0-2 years)');
  await superPage.selectLocation('Remote');
  await superPage.selectCountry('United States');
  await superPage.selectDate('2024-06-01');
  await superPage.selectEmploymentType('Full Time');
  await superPage.selectWorkPreference('Remote');
  await superPage.selectSkills(['Java']);
  await superPage.selectLanguages(['English']);
  const resumePath = path.join(__dirname, '../../../test-data/sample-resume.pdf');
  await superPage.uploadResume(resumePath);
  await superPage.acceptTerms();
});

Then('I should see the loader overlay', async function(this: CustomWorld) {
  if (!superPage) {
    superPage = new SuperAssignmentPage(this.page);
  }
  await expect(superPage.loaderOverlay).toBeVisible();
});
