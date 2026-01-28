import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class DragDropPage extends BasePage {
  readonly draggableElement: Locator;
  readonly dropZone: Locator;
  readonly sourceContainer: Locator;
  readonly targetContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.draggableElement = page.locator('.draggable, [draggable="true"]').first();
    this.dropZone = page.locator('.drop-zone, .drop-target').first();
    this.sourceContainer = page.locator('.source-container, #source').first();
    this.targetContainer = page.locator('.target-container, #target').first();
  }

  async dragToDropZone() {
    await this.draggableElement.dragTo(this.dropZone);
  }

  async dragBetweenContainers() {
    await this.draggableElement.dragTo(this.targetContainer);
  }
}
