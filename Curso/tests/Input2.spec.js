// @ts-check
const { test, expect } = require('@playwright/test');

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('rodrigo');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').type('rode@gmail.com');
  await sleep(4000);
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('demo de la direccion uno Demo de la direccion dos');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Demo direccion dos');
  // await page.getByRole('button', { name: 'Submit' }).click({ timeout: 20000 });
  await page.getByRole('button', { name: 'Submit' }).press('Enter');
  await expect(page).toHaveTitle(/demo/i);
  await sleep(4000);
});

test('test2', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('rodrigo');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').type('rode@gmail.com');
  await sleep(4000);
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('demo de la direccion uno Demo de la direccion dos');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('Demo direccion dos');
  // await page.getByRole('button', { name: 'Submit' }).click({ timeout: 20000 });
  await page.getByRole('button', { name: 'Submit' }).press('Enter');
  await expect(page).toHaveTitle(/demo/i);
});
