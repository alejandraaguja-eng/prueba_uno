// @ts-check
const { test, expect } = require('@playwright/test');

test('clase 10 - ejemplo generado con codegen', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.getByRole('textbox', { name: 'Full Name' }).fill('alejandra');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('alejandra.beltran@example.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('PRUEBA 1');
  await page.getByRole('textbox', { name: 'Current Address' }).press('Tab');
  await page.locator('#permanentAddress').fill('PRUEBA 2');

  await expect(page.getByRole('textbox', { name: 'Full Name' })).toHaveValue('alejandra');
  await expect(page.locator('#permanentAddress')).toHaveValue('PRUEBA 2');
});
