const { BasePage } = require('../utils/base-page');

class DragDropPage extends BasePage {
  constructor(page) {
    super(page);
    this.draggableElement = page.locator('#item1');
    this.dropZone = page.locator('#target1');
    this.sourceContainer = page.locator('#source1');
    this.targetContainer = page.locator('#target1');
  }

  async dragToDropZone() {
    await this.draggableElement.dragTo(this.dropZone);
    await this.page.waitForTimeout(500);
  }

  async dragBetweenContainers() {
    await this.draggableElement.dragTo(this.targetContainer);
    await this.page.waitForTimeout(500);
  }
}

module.exports = { DragDropPage };
