// @ts-check
const { test, expect } = require('@playwright/test');

test('Demo Dos Config', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await expect(page).toHaveTitle(/demosite/i);
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
});
