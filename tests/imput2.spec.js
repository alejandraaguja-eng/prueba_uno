// @ts-check
const { test, expect } = require('@playwright/test');

test('clase 11 - campos input con fill, type y press', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.getByPlaceholder('Full Name').fill('rodrigo');
  await page.getByPlaceholder('name@example.com').type('rode@gmail.com');
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('demo de la direccion uno');
  await page.locator('#permanentAddress').fill('Demo direccion dos');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#output')).toContainText('rodrigo');
  await expect(page.locator('#output')).toContainText('rode@gmail.com');
});
