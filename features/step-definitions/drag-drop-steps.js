const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { DragDropPage } = require('../../../pages/drag-drop-page');

let dragDropPage;

Before({ tags: '@drag-drop' }, async function() {
  dragDropPage = new DragDropPage(this.page);
});

When('I drag {string} to the target container', async function(itemText) {
  if (itemText === 'Item 1') {
    await dragDropPage.dragToDropZone();
  } else if (itemText === 'Item 2') {
    const item2 = this.page.locator('#item2');
    await item2.dragTo(dragDropPage.targetContainer);
    await this.page.waitForTimeout(500);
  }
});

Then('{string} should be in the target container', async function(itemText) {
  const targetItems = await dragDropPage.targetContainer.locator('.drag-item').count();
  expect(targetItems).toBeGreaterThan(0);
});
