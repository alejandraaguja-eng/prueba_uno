// @ts-check
const { test, expect } = require('@playwright/test');
const { TextBoxPage } = require('../pages/TextBoxPage');
const { RadioButtonPage } = require('../pages/RadioButtonPage');
const { CheckboxPage } = require('../pages/CheckboxPage');

test('clases 15-18 - Page Object Model con formulario text-box', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);

  await textBoxPage.open();
  await textBoxPage.fillForm({
    name: 'Alejandra Beltran',
    email: 'alejandra.beltran@example.com',
    currentAddress: 'Direccion actual demo',
    permanentAddress: 'Direccion permanente demo',
  });
  await textBoxPage.submit();

  await expect(textBoxPage.output).toContainText('Alejandra Beltran');
  await expect(textBoxPage.output).toContainText('alejandra.beltran@example.com');
});

test('clases 19-20 - Page Object Model con radio buttons', async ({ page }) => {
  const radioButtonPage = new RadioButtonPage(page);

  await radioButtonPage.open();
  await radioButtonPage.selectYes();
  await expect(radioButtonPage.result).toHaveText('Yes');

  await radioButtonPage.selectImpressive();
  await expect(radioButtonPage.result).toHaveText('Impressive');
});

test('clases 21-22 - Page Object Model con checkbox', async ({ page }) => {
  const checkboxPage = new CheckboxPage(page);

  await checkboxPage.open();
  await checkboxPage.expandAll();
  await checkboxPage.selectHome();

  await expect(checkboxPage.result).toContainText('home');
});
