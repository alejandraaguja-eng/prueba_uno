// @ts-check
const { test, expect } = require('@playwright/test');

test('clase 13 - validar configuracion base del navegador', async ({ page }, testInfo) => {
  await page.goto('https://demoqa.com/text-box');

  await expect(page).toHaveTitle(/demosite/i);
  expect(testInfo.project.name).toBe('chromium');
  expect(page.viewportSize()).toEqual({ width: 1000, height: 800 });
});

test('clase 13 - timeout local y expect timeout', async ({ page }) => {
  test.setTimeout(15000);

  await page.goto('https://demoqa.com/text-box');
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
});
