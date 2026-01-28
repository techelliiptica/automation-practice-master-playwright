const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { HoverTooltipPage } = require('../../../pages/hover-tooltip-page');

let hoverPage;

Before({ tags: '@hover-tooltip' }, async function() {
  hoverPage = new HoverTooltipPage(this.page);
});

When('I hover over the hover element', async function() {
  await hoverPage.hoverOverElement();
});

Then('I should see the tooltip', async function() {
  await hoverPage.waitForTooltip();
});

Then('the tooltip should contain text', async function() {
  const tooltipText = await hoverPage.getTooltipText();
  expect(tooltipText).toBeTruthy();
});
