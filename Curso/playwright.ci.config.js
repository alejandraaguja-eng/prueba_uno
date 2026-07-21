// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: 'ci-smoke.spec.js',
  timeout: 30 * 1000,
  fullyParallel: false,
  forbidOnly: true,
  retries: 1,
  workers: 1,
  reporter: [
    ['line'],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html', { open: 'never' }],
  ],
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
});

