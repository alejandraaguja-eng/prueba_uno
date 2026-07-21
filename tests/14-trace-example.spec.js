// @ts-check
const { test, expect } = require('@playwright/test');

test('clase 14 - trace, screenshot y evidencia en reporte', async ({ page }, testInfo) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').fill('Evidencia Trace');

  const screenshot = await page.screenshot();
  await testInfo.attach('pantalla-text-box', {
    body: screenshot,
    contentType: 'image/png',
  });

  await expect(page.getByPlaceholder('Full Name')).toHaveValue('Evidencia Trace');
});
