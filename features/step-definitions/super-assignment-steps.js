const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { SuperAssignmentPage } = require('../../../pages/super-assignment-page');
const path = require('path');

let superPage;

Before({ tags: '@super-assignment' }, async function() {
  superPage = new SuperAssignmentPage(this.page);
});

When('I fill in personal information:', async function(dataTable) {
  const data = dataTable.rowsHash();
  await superPage.fillPersonalInfo(
    data['First Name'],
    data['Last Name'],
    data['Email'],
    data['Phone']
  );
});

When('I select {string} as position', async function(position) {
  await superPage.selectPosition(position);
});

When('I select {string} as experience level', async function(level) {
  await superPage.selectExperienceLevel(level);
});

When('I select {string} as location', async function(location) {
  await superPage.selectLocation(location);
});

When('I select {string} as country', async function(country) {
  await superPage.selectCountry(country);
});

When('I select {string} as available start date', async function(date) {
  await superPage.selectDate(date);
});

When('I select {string} as employment type', async function(type) {
  await superPage.selectEmploymentType(type);
});

When('I select {string} as work preference', async function(preference) {
  await superPage.selectWorkPreference(preference);
});

When('I select the following skills:', async function(dataTable) {
  const skills = dataTable.raw().map(row => row[0]);
  await superPage.selectSkills(skills);
});

When('I select the following languages:', async function(dataTable) {
  const languages = dataTable.raw().map(row => row[0]);
  await superPage.selectLanguages(languages);
});

When('I fill in cover letter with {string}', async function(text) {
  await superPage.coverLetterTextarea.fill(text);
});

When('I upload a resume file', async function() {
  const resumePath = path.join(__dirname, '../../../test-data/sample-resume.pdf');
  await superPage.uploadResume(resumePath);
});

When('I accept the terms and conditions', async function() {
  await superPage.acceptTerms();
});

Then('the progress bar should show {string}', async function(expectedProgress) {
  const progress = await superPage.getProgressPercentage();
  expect(progress).toBe(expectedProgress);
});

Then('the progress bar should be greater than {string}', async function(minProgress) {
  const progress = await superPage.getProgressPercentage();
  expect(parseInt(progress || '0')).toBeGreaterThan(parseInt(minProgress));
});

When('I submit the form', async function() {
  await superPage.submitForm();
});

Then('I should see the loader', async function() {
  await expect(superPage.loaderOverlay).toBeVisible();
});

Then('I should see my submission in the table', async function() {
  await superPage.waitForLoader();
  const rowCount = await superPage.getTableRowCount();
  expect(rowCount).toBeGreaterThan(0);
});

When('I click on the submit button', async function() {
  if (!superPage) {
    superPage = new (require('../../../pages/super-assignment-page').SuperAssignmentPage)(this.page);
  }
  await superPage.submitButton.click();
});

Then('I should see validation errors for required fields', async function() {
  await expect(superPage.firstNameInput).toBeVisible();
});

Then('I should see the download button', async function() {
  await expect(superPage.downloadBtn).toBeVisible();
});

When('I click on the download button', async function() {
  if (!superPage) {
    superPage = new (require('../../../pages/super-assignment-page').SuperAssignmentPage)(this.page);
  }
  const [download] = await Promise.all([
    this.page.waitForEvent('download'),
    superPage.downloadFile()
  ]);
  this.download = download;
});

Then('the file should be downloaded', async function() {
  expect(this.download.suggestedFilename()).toBeTruthy();
});

When('I fill all required fields', async function() {
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

Then('I should see the loader overlay', async function() {
  await expect(superPage.loaderOverlay).toBeVisible();
});
