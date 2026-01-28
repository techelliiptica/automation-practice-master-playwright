import { test, expect } from '@playwright/test';
import { ButtonInteractionsPage } from '../pages/button-interactions-page';

test.describe('Button Interactions', () => {
  test.beforeEach(async ({ page }) => {
    const buttonPage = new ButtonInteractionsPage(page);
    await buttonPage.navigateTo('/button-interactions.html');
  });

  test('should click primary button', async ({ page }) => {
    const buttonPage = new ButtonInteractionsPage(page);
    await buttonPage.clickPrimaryButton();
    await expect(buttonPage.basicMessage).toBeVisible();
    await expect(buttonPage.basicMessage).toContainText('Primary button clicked');
  });

  test('should increment click counter', async ({ page }) => {
    const buttonPage = new ButtonInteractionsPage(page);
    
    const initialCount = parseInt(await buttonPage.getClickCount() || '0');
    await buttonPage.clickCounterButton();
    
    await expect(buttonPage.clickCount).toHaveText(String(initialCount + 1));
  });

  test('should handle disabled button', async ({ page }) => {
    const buttonPage = new ButtonInteractionsPage(page);
    
    await expect(buttonPage.disabledBtn).toBeDisabled();
    await buttonPage.toggleDisabledButton();
    await expect(buttonPage.disabledBtn).toBeEnabled();
  });

  test('should add and remove dynamic buttons', async ({ page }) => {
    const buttonPage = new ButtonInteractionsPage(page);
    
    await buttonPage.addDynamicButton();
    await expect(page.locator('#dynamicBtn1')).toBeVisible();
    
    await buttonPage.removeLastButton();
    await expect(page.locator('#dynamicBtn1')).not.toBeVisible();
  });

  test('should handle double click', async ({ page }) => {
    const buttonPage = new ButtonInteractionsPage(page);
    
    await buttonPage.doubleClickButton();
    await expect(buttonPage.doubleClickMessage).toBeVisible();
    await expect(buttonPage.doubleClickMessage).toContainText('Double click');
  });

  test('should handle right click and context menu', async ({ page }) => {
    const buttonPage = new ButtonInteractionsPage(page);
    
    await buttonPage.rightClickButton();
    await expect(buttonPage.contextMenu).toBeVisible();
    
    await buttonPage.selectContextMenuOption('Edit');
    await expect(buttonPage.rightClickMessage).toContainText('Edit');
  });

  test('should handle delayed button response', async ({ page }) => {
    const buttonPage = new ButtonInteractionsPage(page);
    
    await buttonPage.waitForDelayButtonResponse();
    await expect(buttonPage.delayMessage).toContainText('complete');
  });
});
