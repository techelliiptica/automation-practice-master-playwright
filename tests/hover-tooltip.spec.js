const { test, expect } = require('@playwright/test');
const { HoverTooltipPage } = require('../pages/hover-tooltip-page');

test.describe('Hover & Tooltip', () => {
  test.beforeEach(async ({ page }) => {
    const hoverPage = new HoverTooltipPage(page);
    await hoverPage.navigateTo('/hover-tooltip.html');
  });

  test('should show tooltip on hover', async ({ page }) => {
    const hoverPage = new HoverTooltipPage(page);
    
    await hoverPage.hoverOverElement();
    await hoverPage.waitForTooltip();
    
    const tooltipText = await hoverPage.getTooltipText();
    expect(tooltipText).toBeTruthy();
  });
});
