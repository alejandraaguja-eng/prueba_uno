// @ts-check
const { defineConfig } = require('@playwright/test');

const config = defineConfig({
  /* Folder where my tests are saved */
  testDir: './tests',

  /* Maximum time one test can run for. */
  timeout: 40 * 1000,
  expect: {
    timeout: 60000
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  retries: 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  //workers: 30,

  /* Reporter to use. */
  reporter: 'html',

  /* Shared settings for all the projects below. */
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
    headless: false,
    viewport: { width: 1850, height: 700 },
    browserName: 'chromium',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', //off, on, only-on-failure despues de falla
    video: 'on',
    // 'off' - No graban video.
    // 'on' - Grabar video para cada prueba.
    // 'retain-on-failure' - Grabe video para cada prueba, pero elimine todos los videos de las ejecuciones de prueba exitosas.
    // 'on-first-retry' - Grabe video solo cuando vuelva a intentar una prueba por primera vez.
  },
});

module.exports = config;
