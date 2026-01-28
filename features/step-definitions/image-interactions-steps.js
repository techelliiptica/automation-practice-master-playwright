const { When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ImageInteractionsPage } = require('../../../pages/image-interactions-page');

let imagePage;

Before({ tags: '@image-interactions' }, async function() {
  imagePage = new ImageInteractionsPage(this.page);
});

When('I check the alt text of {string}', async function(imageName) {
  this.imageIndex = parseInt(imageName.replace('Image ', '')) - 1;
  this.altText = await imagePage.getImageAlt(this.imageIndex);
});

Then('the alt text should contain {string}', async function(expectedText) {
  expect(this.altText).toContain(expectedText);
});

When('I check the source of {string}', async function(imageName) {
  this.imageIndex = parseInt(imageName.replace('Image ', '')) - 1;
  this.imageSrc = await imagePage.getImageSrc(this.imageIndex);
});

Then('the image source should contain {string}', async function(expectedText) {
  expect(this.imageSrc).toContain(expectedText);
});

When('I check if {string} is broken', async function(imageName) {
  this.imageIndex = parseInt(imageName.replace('Image ', '')) - 1;
  this.isBroken = await imagePage.isImageBroken(this.imageIndex);
});

Then('{string} should be a broken image', async function(imageName) {
  expect(this.isBroken).toBeTruthy();
});

When('I click on the {string} button', async function(buttonText) {
  if (!imagePage) {
    imagePage = new (require('../../../pages/image-interactions-page').ImageInteractionsPage)(this.page);
  }
  
  if (buttonText.includes('Get Image')) {
    const imageId = buttonText.match(/\d+/)[0];
    await imagePage.extractImageInfo(imageId);
  } else if (buttonText === 'Add Dynamic Image') {
    await imagePage.addDynamicImage();
  }
});

Then('I should see image information displayed', async function() {
  await expect(imagePage.resultDisplay).toBeVisible();
});

Then('I should see {string}', async function(text) {
  await expect(this.page.locator(`text=${text}`)).toBeVisible();
});
