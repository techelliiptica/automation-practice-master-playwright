import { test, expect } from '@playwright/test';
import { FormSubmissionPage } from '../pages/form-submission-page';

test.describe('Form Submission', () => {
  test.beforeEach(async ({ page }) => {
    const formPage = new FormSubmissionPage(page);
    await formPage.navigateTo('/form-submission.html');
  });

  test('should fill and submit form successfully', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);
    
    await formPage.fillForm('John Doe', 'john@example.com', 'password123', 'Test message');
    await formPage.submitForm();
    
    const result = await formPage.getResultText();
    expect(result).toContain('John Doe');
    expect(result).toContain('john@example.com');
  });

  test('should validate required fields', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);
    
    await formPage.submitButton.click();
    
    // Form should show validation - check if required attribute is present
    const isRequired = await formPage.nameInput.getAttribute('required');
    expect(isRequired).toBeTruthy();
  });
});
