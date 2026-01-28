import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class SuperAssignmentPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly positionSelect: Locator;
  readonly experienceLevelSelect: Locator;
  readonly locationSelect: Locator;
  readonly countrySelect: Locator;
  readonly availableDateInput: Locator;
  readonly fullTimeRadio: Locator;
  readonly remoteRadio: Locator;
  readonly skillJavaCheckbox: Locator;
  readonly langEnglishCheckbox: Locator;
  readonly coverLetterTextarea: Locator;
  readonly resumeInput: Locator;
  readonly acceptTermsCheckbox: Locator;
  readonly submitButton: Locator;
  readonly progressBar: Locator;
  readonly progressPercentage: Locator;
  readonly loaderOverlay: Locator;
  readonly submissionsTable: Locator;
  readonly downloadBtn: Locator;
  readonly fileNameText: Locator;

  constructor(page: Page) {
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

  async fillPersonalInfo(firstName: string, lastName: string, email: string, phone: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }

  async selectPosition(position: string) {
    await this.positionSelect.selectOption(position);
  }

  async selectExperienceLevel(level: string) {
    await this.experienceLevelSelect.selectOption(level);
  }

  async selectLocation(location: string) {
    await this.locationSelect.selectOption(location);
  }

  async selectCountry(country: string) {
    await this.countrySelect.selectOption(country);
  }

  async selectDate(date: string) {
    await this.availableDateInput.fill(date);
  }

  async selectEmploymentType(type: 'Full Time' | 'Part Time' | 'Contract' | 'Internship') {
    if (type === 'Full Time') await this.fullTimeRadio.check();
    else await this.page.locator(`#${type.toLowerCase().replace(' ', '')}`).check();
  }

  async selectWorkPreference(preference: 'Remote' | 'On-site' | 'Hybrid') {
    await this.page.locator(`#${preference.toLowerCase().replace('-', '')}`).check();
  }

  async selectSkills(skills: string[]) {
    for (const skill of skills) {
      await this.page.locator(`#skill${skill.replace(' ', '')}`).check();
    }
  }

  async selectLanguages(languages: string[]) {
    for (const lang of languages) {
      await this.page.locator(`#lang${lang}`).check();
    }
  }

  async uploadResume(filePath: string) {
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
