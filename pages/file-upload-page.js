const { BasePage } = require('../utils/base-page');

class FileUploadPage extends BasePage {
  constructor(page) {
    super(page);
    this.singleFileInput = page.locator('input[type="file"]').first();
    this.multipleFileInput = page.locator('input[type="file"][multiple]');
    this.uploadButton = page.locator('button:has-text("Upload File")').first();
    this.resultDisplay = page.locator('.result-display');
  }

  async uploadSingleFile(filePath) {
    await this.singleFileInput.setInputFiles(filePath);
  }

  async uploadMultipleFiles(filePaths) {
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

module.exports = { FileUploadPage };
