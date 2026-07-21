// @ts-check
const { test, expect } = require('@playwright/test');

test('clase 12 - seleccionar radio button Yes', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  await page.getByText('Yes').click();

  await expect(page.locator('.text-success')).toHaveText('Yes');
  await expect(page.locator('#yesRadio')).toBeChecked();
});

test('clase 12 - cambiar entre Yes e Impressive', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  await page.getByText('Yes').click();
  await expect(page.locator('.text-success')).toHaveText('Yes');

  await page.getByText('Impressive').click();
  await expect(page.locator('.text-success')).toHaveText('Impressive');
});
