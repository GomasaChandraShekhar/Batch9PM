import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', {
      open: 'never',
      // outputFolder: `playwright-report-${new Date().toLocaleString()
      // .replaceAll( /[/:,]/g, '-' )}`
    }],
    // [ 'dot' ]
    // [ 'line' ]
    // [ 'list' ]
    // [ 'json', { outputFile: 'result.json' } ]
    // [ 'junit', { outputFile: 'result.xml' } ]
    // [ 'blob' ]
    // [ 'github' ]
    ['allure-playwright']

  ],

  timeout: 50 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  use: {
    headless: false,
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1550, height: 680 },
        // ignoreHTTPSErrors: true,
        // proxy: {
        //     server: 'http://myproxy.com:3128',
        //     bypass: '.com',
        //     username: 'username',
        //     password:'password'
        // }
      },
      // fullyParallel: true,
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
