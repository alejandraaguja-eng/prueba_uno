// @ts-check
const { test, expect } = require('@playwright/test');

// https://playwright.bootcss.com/python/docs/selectors

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

var tiempo=1500

test('test', async ({ page }) => {

    await page.goto('https://demoqa.com/radio-button');

    await page.getByText('Yes').click();
    await sleep(tiempo)

    await page.getByText('Impressive').click();
    await sleep(tiempo)

});

test.only('test2', async ({ page }) => {

    await page.goto('https://demoqa.com/radio-button');

    await page.getByText('Yes').check()
    await sleep(tiempo)

    expect(await page.getByLabel('Yes').isChecked()).toBeTruthy()

    await page.getByText('Impressive').click();
    await sleep(tiempo)

    await page.getByText('Yes').check()
    await sleep(tiempo)

    await page.getByText('Impressive').click();
    await sleep(tiempo)

});
