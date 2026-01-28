import { test, expect } from '@playwright/test';
import { HoverTooltipPage } from '../pages/hover-tooltip-page';

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
