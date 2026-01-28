const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { FileUploadPage } = require('../../../pages/file-upload-page');
const path = require('path');

let uploadPage;

Before({ tags: '@file-upload' }, async function() {
  uploadPage = new FileUploadPage(this.page);
});

When('I select a file to upload', async function() {
  const filePath = path.join(__dirname, '../../../test-data/sample-resume.pdf');
  await uploadPage.uploadSingleFile(filePath);
});

When('I select multiple files to upload', async function() {
  const filePath = path.join(__dirname, '../../../test-data/sample-resume.pdf');
  await uploadPage.uploadMultipleFiles([filePath, filePath]);
});

When('I click on the {string} button', async function(buttonText) {
  if (!uploadPage) {
    uploadPage = new (require('../../../pages/file-upload-page').FileUploadPage)(this.page);
  }
  
  if (buttonText === 'Upload File') {
    await uploadPage.uploadSingleFileButton();
  } else if (buttonText === 'Upload All Files') {
    await uploadPage.uploadMultipleFilesButton();
  }
});

Then('I should see upload success message', async function() {
  await expect(uploadPage.resultDisplay).toBeVisible();
});
