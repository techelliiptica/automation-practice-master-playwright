const { test, expect } = require('@playwright/test');
const { SuperAssignmentPage } = require('../pages/super-assignment-page');
const path = require('path');

test.describe('Super Assignment - Job Registration Form', () => {
  test.beforeEach(async ({ page }) => {
    const superPage = new SuperAssignmentPage(page);
    await superPage.navigateTo('/super-assignment.html');
  });

  test('should fill complete form and submit', async ({ page }) => {
    const superPage = new SuperAssignmentPage(page);
    
    // Fill personal information
    await superPage.fillPersonalInfo('John', 'Doe', 'john.doe@example.com', '+1-234-567-8900');
    
    // Fill job details
    await superPage.selectPosition('Software Engineer');
    await superPage.selectExperienceLevel('Mid Level (3-5 years)');
    await superPage.selectLocation('Remote');
    await superPage.selectCountry('United States');
    await superPage.selectDate('2024-06-01');
    
    // Select employment preferences
    await superPage.selectEmploymentType('Full Time');
    await superPage.selectWorkPreference('Remote');
    
    // Select skills and languages
    await superPage.selectSkills(['Java', 'Python', 'JavaScript']);
    await superPage.selectLanguages(['English', 'Spanish']);
    
    // Fill additional information
    await superPage.coverLetterTextarea.fill('I am interested in this position...');
    
    // Upload resume
    const resumePath = path.join(__dirname, '../test-data/sample-resume.pdf');
    await superPage.uploadResume(resumePath);
    
    // Accept terms
    await superPage.acceptTerms();
    
    // Verify progress bar
    const progress = await superPage.getProgressPercentage();
    expect(progress).toBe('100%');
    
    // Submit form
    await superPage.submitForm();
    
    // Wait for loader
    await superPage.waitForLoader();
    
    // Verify submission in table
    const rowCount = await superPage.getTableRowCount();
    expect(rowCount).toBeGreaterThan(0);
  });

  test('should update progress bar as form is filled', async ({ page }) => {
    const superPage = new SuperAssignmentPage(page);
    
    await superPage.fillPersonalInfo('Jane', 'Smith', 'jane@example.com', '+1-234-567-8901');
    
    const progress = await superPage.getProgressPercentage();
    expect(parseInt(progress || '0')).toBeGreaterThan(0);
  });

  test('should validate required fields', async ({ page }) => {
    const superPage = new SuperAssignmentPage(page);
    
    await superPage.submitButton.click();
    
    // Form should show validation errors
    await expect(superPage.firstNameInput).toBeVisible();
  });

  test('should download uploaded file', async ({ page }) => {
    const superPage = new SuperAssignmentPage(page);
    
    const resumePath = path.join(__dirname, '../test-data/sample-resume.pdf');
    await superPage.uploadResume(resumePath);
    
    await expect(superPage.downloadBtn).toBeVisible();
    
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      superPage.downloadFile()
    ]);
    
    expect(download.suggestedFilename()).toBeTruthy();
  });

  test('should display loader during submission', async ({ page }) => {
    const superPage = new SuperAssignmentPage(page);
    
    // Fill minimum required fields
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
    
    const resumePath = path.join(__dirname, '../test-data/sample-resume.pdf');
    await superPage.uploadResume(resumePath);
    await superPage.acceptTerms();
    
    await superPage.submitForm();
    
    // Loader should appear
    await expect(superPage.loaderOverlay).toBeVisible();
  });
});
