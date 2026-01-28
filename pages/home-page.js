const { BasePage } = require('../utils/base-page');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.headerTitle = page.locator('header h1');
    this.formSubmissionCard = page.locator('a[href="form-submission.html"]');
    this.buttonInteractionsCard = page.locator('a[href="button-interactions.html"]');
    this.dropdownSelectCard = page.locator('a[href="dropdown-select.html"]');
    this.checkboxRadioCard = page.locator('a[href="checkbox-radio.html"]');
    this.dynamicContentCard = page.locator('a[href="dynamic-content.html"]');
    this.alertsModalsCard = page.locator('a[href="alerts-modals.html"]');
    this.tableDataCard = page.locator('a[href="table-data.html"]');
    this.fileUploadCard = page.locator('a[href="file-upload.html"]');
    this.hoverTooltipCard = page.locator('a[href="hover-tooltip.html"]');
    this.dragDropCard = page.locator('a[href="drag-drop.html"]');
    this.iframeCard = page.locator('a[href="iframe.html"]');
    this.datePickerCard = page.locator('a[href="date-picker.html"]');
    this.linkInteractionsCard = page.locator('a[href="link-interactions.html"]');
    this.imageInteractionsCard = page.locator('a[href="image-interactions.html"]');
    this.superAssignmentCard = page.locator('a[href="super-assignment.html"]');
  }

  async navigate() {
    await this.navigateTo('/index.html');
  }

  async clickScenarioCard(scenarioName) {
    await this.page.click(`a[href="${scenarioName}.html"]`);
  }
}

module.exports = { HomePage };
