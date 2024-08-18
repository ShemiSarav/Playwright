// @ts-check
const { test, expect } = require('@playwright/test');

test('Amazon selector test', async ({ page }) => {
  await page.goto('https://www.amazon.es/');

  await page.locator('#sp-cc-accept').click();

  await page.locator('#twotabsearchtextbox').fill('proteina');

  await page.locator('.s-suggestion-container').nth(0).click();

  await page.locator('[data-component-type="s-search-result"]:not(.AdHolder)').nth(2).locator('.s-product-image-container').click();

  await expect(page.locator('#imgTagWrapperId')).toBeVisible();

});

