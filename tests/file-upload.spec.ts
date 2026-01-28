import { test, expect } from '@playwright/test';
import { FileUploadPage } from '../pages/file-upload-page';
import * as path from 'path';

test.describe('File Upload', () => {
  test.beforeEach(async ({ page }) => {
    const uploadPage = new FileUploadPage(page);
    await uploadPage.navigateTo('/file-upload.html');
  });

  test('should upload single file', async ({ page }) => {
    const uploadPage = new FileUploadPage(page);
    
    const filePath = path.join(__dirname, '../test-data/sample-resume.pdf');
    await uploadPage.uploadSingleFile(filePath);
    await uploadPage.uploadSingleFileButton();
    
    await expect(uploadPage.resultDisplay).toBeVisible();
  });

  test('should upload multiple files', async ({ page }) => {
    const uploadPage = new FileUploadPage(page);
    
    const filePath = path.join(__dirname, '../test-data/sample-resume.pdf');
    await uploadPage.uploadMultipleFiles([filePath, filePath]);
    await uploadPage.uploadMultipleFilesButton();
    
    await expect(uploadPage.resultDisplay).toBeVisible();
  });
});
