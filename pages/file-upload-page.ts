import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class FileUploadPage extends BasePage {
  readonly singleFileInput: Locator;
  readonly multipleFileInput: Locator;
  readonly uploadButton: Locator;
  readonly resultDisplay: Locator;

  constructor(page: Page) {
    super(page);
    this.singleFileInput = page.locator('input[type="file"]').first();
    this.multipleFileInput = page.locator('input[type="file"][multiple]');
    this.uploadButton = page.locator('button:has-text("Upload File")').first();
    this.resultDisplay = page.locator('.result-display');
  }

  async uploadSingleFile(filePath: string) {
    await this.singleFileInput.setInputFiles(filePath);
  }

  async uploadMultipleFiles(filePaths: string[]) {
    await this.multipleFileInput.setInputFiles(filePaths);
  }

  async submitUpload() {
    await this.uploadButton.click();
  }

  async uploadSingleFileButton() {
    await this.page.locator('button:has-text("Upload File")').first().click();
  }

  async uploadMultipleFilesButton() {
    await this.page.locator('button:has-text("Upload All Files")').click();
  }
}
