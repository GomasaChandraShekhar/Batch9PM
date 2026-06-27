import { test, expect } from '@playwright/test';

test.skip("Test01", async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForLoadState('domcontentloaded');

  const pageTitle = await page.title();
  console.log('Title is :: ', pageTitle);
  expect.soft(pageTitle).toBe('Automation Testing'); // fail
  await expect.soft(page).toHaveTitle('Automation Testing Practice');

  await page.close();

});


test.skip("Test02", async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForLoadState('domcontentloaded');

  const pageTitle = await page.title();
  console.log('Title is :: ', pageTitle);
  expect.soft(pageTitle).toBe('Automation Testing'); // fail
  await expect.soft(page).toHaveTitle('Automation Testing Practice');

  await page.close();

});



test.skip("Test03", async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  await page.waitForLoadState('domcontentloaded');
  await page.pause();
  const pageTitle = await page.title();
  console.log('Title is :: ', pageTitle);
  // await expect.soft(page).toHaveTitle('Automation Testing Practice');


  await page.getByRole('button', { name: 'Submit Form' }).focus();
  await page.getByText('Submit Form').focus();
  // await page.getByLabel('Email Address:').fill('avdjdj@gmail.com');
  // await page.getByLabel('Password:').fill('avdjdjer@gmail');
  await page.getByLabel('Your Age:').fill('35');

  // await page.getByPlaceholder('Enter your full name').fill('Playwright');
  await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('9100774577');

  await page.getByAltText('logo image').focus();

  await page.getByTitle('Home page link').focus();

  await page.getByTestId('profile-name').focus();



});

test("Test04", async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForLoadState('domcontentloaded');
  await page.pause();

  const nameField = page.getByRole('textbox', { name: 'Enter Name' });

  await nameField.fill("9887766");




});

