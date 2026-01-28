const { BasePage } = require('../utils/base-page');

class SuperAssignmentPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.positionSelect = page.locator('#position');
    this.experienceLevelSelect = page.locator('#experienceLevel');
    this.locationSelect = page.locator('#location');
    this.countrySelect = page.locator('#country');
    this.availableDateInput = page.locator('#availableDate');
    this.fullTimeRadio = page.locator('#fullTime');
    this.remoteRadio = page.locator('#remote');
    this.skillJavaCheckbox = page.locator('#skillJava');
    this.langEnglishCheckbox = page.locator('#langEnglish');
    this.coverLetterTextarea = page.locator('#coverLetter');
    this.resumeInput = page.locator('#resume');
    this.acceptTermsCheckbox = page.locator('#acceptTerms');
    this.submitButton = page.locator('#submitBtn');
    this.progressBar = page.locator('#progressBar');
    this.progressPercentage = page.locator('#progressPercentage');
    this.loaderOverlay = page.locator('#loaderOverlay');
    this.submissionsTable = page.locator('#submissionsTable');
    this.downloadBtn = page.locator('#downloadBtn');
    this.fileNameText = page.locator('#fileNameText');
  }

  async fillPersonalInfo(firstName, lastName, email, phone) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }

  async selectPosition(position) {
    await this.positionSelect.selectOption(position);
  }

  async selectExperienceLevel(level) {
    await this.experienceLevelSelect.selectOption(level);
  }

  async selectLocation(location) {
    await this.locationSelect.selectOption(location);
  }

  async selectCountry(country) {
    await this.countrySelect.selectOption(country);
  }

  async selectDate(date) {
    await this.availableDateInput.fill(date);
  }

  async selectEmploymentType(type) {
    if (type === 'Full Time') await this.fullTimeRadio.check();
    else await this.page.locator(`#${type.toLowerCase().replace(' ', '')}`).check();
  }

  async selectWorkPreference(preference) {
    await this.page.locator(`#${preference.toLowerCase().replace('-', '')}`).check();
  }

  async selectSkills(skills) {
    for (const skill of skills) {
      await this.page.locator(`#skill${skill.replace(' ', '')}`).check();
    }
  }

  async selectLanguages(languages) {
    for (const lang of languages) {
      await this.page.locator(`#lang${lang}`).check();
    }
  }

  async uploadResume(filePath) {
    await this.resumeInput.setInputFiles(filePath);
  }

  async acceptTerms() {
    await this.acceptTermsCheckbox.check();
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async getProgressPercentage() {
    return await this.progressPercentage.textContent();
  }

  async waitForLoader() {
    await this.loaderOverlay.waitFor({ state: 'visible' });
    await this.loaderOverlay.waitFor({ state: 'hidden', timeout: 5000 });
  }

  async downloadFile() {
    await this.downloadBtn.click();
  }

  async getTableRowCount() {
    return await this.submissionsTable.locator('tbody tr').count();
  }
}

module.exports = { SuperAssignmentPage };
