const { test, expect } = require('@playwright/test');
const { AlertsModalsPage } = require('../pages/alerts-modals-page');

test.describe('Alerts & Modals', () => {
  test.beforeEach(async ({ page }) => {
    const alertsPage = new AlertsModalsPage(page);
    await alertsPage.navigateTo('/alerts-modals.html');
  });

  test('should handle alert dialog', async ({ page }) => {
    const alertsPage = new AlertsModalsPage(page);
    
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBeTruthy();
      await dialog.accept();
    });
    
    await alertsPage.clickAlertButton();
  });

  test('should handle confirm dialog - accept', async ({ page }) => {
    const alertsPage = new AlertsModalsPage(page);
    
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      await dialog.accept();
    });
    
    await alertsPage.clickConfirmButton();
  });

  test('should handle confirm dialog - dismiss', async ({ page }) => {
    const alertsPage = new AlertsModalsPage(page);
    
    page.on('dialog', async dialog => {
      await dialog.dismiss();
    });
    
    await alertsPage.clickConfirmButton();
  });

  test('should handle prompt dialog', async ({ page }) => {
    const alertsPage = new AlertsModalsPage(page);
    
    page.on('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('Test input');
    });
    
    await alertsPage.clickPromptButton();
  });

  test('should open and close modal', async ({ page }) => {
    const alertsPage = new AlertsModalsPage(page);
    
    await alertsPage.openModal();
    const modal = await alertsPage.getModal('simpleModal');
    await expect(modal).toBeVisible();
    
    await alertsPage.closeModal();
    await expect(modal).not.toBeVisible();
  });
});
