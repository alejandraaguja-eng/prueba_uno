const { test, expect } = require('@playwright/test');

test('Playwright abre una página local', async ({ page }) => {
  await page.setContent(`
    <main>
      <h1>Curso Playwright</h1>
      <button id="continuar">Continuar</button>
      <p id="resultado" hidden>Entorno listo</p>
    </main>
    <script>
      document.querySelector('#continuar').addEventListener('click', () => {
        document.querySelector('#resultado').hidden = false;
      });
    </script>
  `);

  await expect(page.getByRole('heading', { name: 'Curso Playwright' })).toBeVisible();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await expect(page.getByText('Entorno listo')).toBeVisible();
});

