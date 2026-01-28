const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home-page');

test.describe('Home Page', () => {
  test('should display all scenario cards', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    await expect(homePage.headerTitle).toBeVisible();
    await expect(homePage.formSubmissionCard).toBeVisible();
    await expect(homePage.buttonInteractionsCard).toBeVisible();
    await expect(homePage.dropdownSelectCard).toBeVisible();
    await expect(homePage.checkboxRadioCard).toBeVisible();
    await expect(homePage.dynamicContentCard).toBeVisible();
    await expect(homePage.alertsModalsCard).toBeVisible();
    await expect(homePage.tableDataCard).toBeVisible();
    await expect(homePage.fileUploadCard).toBeVisible();
    await expect(homePage.hoverTooltipCard).toBeVisible();
    await expect(homePage.dragDropCard).toBeVisible();
    await expect(homePage.iframeCard).toBeVisible();
    await expect(homePage.datePickerCard).toBeVisible();
    await expect(homePage.linkInteractionsCard).toBeVisible();
    await expect(homePage.imageInteractionsCard).toBeVisible();
    await expect(homePage.superAssignmentCard).toBeVisible();
  });

  test('should navigate to form submission page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.formSubmissionCard.click();
    await expect(page).toHaveURL(/.*form-submission\.html/);
  });

  test('should navigate to button interactions page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.buttonInteractionsCard.click();
    await expect(page).toHaveURL(/.*button-interactions\.html/);
  });
});
