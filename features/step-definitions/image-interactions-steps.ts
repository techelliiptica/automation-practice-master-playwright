import { When, Then, Before } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { ImageInteractionsPage } from '../../pages/image-interactions-page';

let imagePage: ImageInteractionsPage;

Before({ tags: '@image-interactions' }, async function(this: CustomWorld) {
  imagePage = new ImageInteractionsPage(this.page);
});

When('I check the alt text of {string}', async function(this: CustomWorld, imageName: string) {
  if (!imagePage) {
    imagePage = new ImageInteractionsPage(this.page);
  }
  (this as any).imageIndex = parseInt(imageName.replace('Image ', '')) - 1;
  (this as any).altText = await imagePage.getImageAlt((this as any).imageIndex);
});

Then('the alt text should contain {string}', async function(this: CustomWorld, expectedText: string) {
  const altText = (this as any).altText;
  expect(altText).toContain(expectedText);
});

When('I check the source of {string}', async function(this: CustomWorld, imageName: string) {
  if (!imagePage) {
    imagePage = new ImageInteractionsPage(this.page);
  }
  (this as any).imageIndex = parseInt(imageName.replace('Image ', '')) - 1;
  (this as any).imageSrc = await imagePage.getImageSrc((this as any).imageIndex);
});

Then('the image source should contain {string}', async function(this: CustomWorld, expectedText: string) {
  const imageSrc = (this as any).imageSrc;
  expect(imageSrc).toContain(expectedText);
});

When('I check if {string} is broken', async function(this: CustomWorld, imageName: string) {
  if (!imagePage) {
    imagePage = new ImageInteractionsPage(this.page);
  }
  (this as any).imageIndex = parseInt(imageName.replace('Image ', '')) - 1;
  (this as any).isBroken = await imagePage.isImageBroken((this as any).imageIndex);
});

Then('{string} should be a broken image', async function(this: CustomWorld, imageName: string) {
  const isBroken = (this as any).isBroken;
  expect(isBroken).toBeTruthy();
});

When('I click on the {string} button', async function(this: CustomWorld, buttonText: string) {
  if (!imagePage) {
    imagePage = new ImageInteractionsPage(this.page);
  }
  if (buttonText.includes('Get Image')) {
    const imageId = buttonText.match(/\d+/)?.[0];
    if (imageId) {
      await imagePage.extractImageInfo(imageId);
    }
  } else if (buttonText === 'Add Dynamic Image') {
    await imagePage.addDynamicImage();
  }
});

Then('I should see image information displayed', async function(this: CustomWorld) {
  if (!imagePage) {
    imagePage = new ImageInteractionsPage(this.page);
  }
  await expect(imagePage.resultDisplay).toBeVisible();
});
