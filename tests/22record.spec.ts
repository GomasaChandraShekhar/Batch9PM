import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('heading', { name: 'Automation Testing Practice' }).click();
  await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Automation Testing Practice');
  await expect(page.getByRole('textbox', { name: 'Enter Name' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Playwright');
  await expect(page.getByRole('textbox', { name: 'Enter Name' })).toHaveValue('Playwright');
//   await page.pause();

  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('sdjksfsj@mail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByText('Sunday').click();
  await page.locator('div:nth-child(11) > div:nth-child(4)').click();
  await page.getByLabel('Colors:').selectOption('blue');
  await page.getByLabel('Country:').selectOption('uk');
  await page.getByPlaceholder('End Date').fill('2026-06-10');
  await page.getByPlaceholder('Start Date').fill('2027-10-15');
  await page.getByPlaceholder('End Date').fill('2028-11-16');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Upload Single File' }).click();
  await page.getByRole('button', { name: 'Upload Multiple Files' }).click();
  await page.locator('#draggable').click();
  await page.locator('#droppable').click();
  await page.getByText('Drag me to my target').click();
  await page.locator('#droppable').click();
  await page.getByText('Drag me to my target').click();
  await page.getByText('Drag me to my target').click();
  await page.locator('#droppable').click();
  await page.getByText('Drag me to my target').click();
  await page.locator('#draggable').click();
  await page.locator('#droppable').click();

  await page.pause();
  await page.getByRole('button', { name: 'START' }).click();
  await page.getByRole('heading', { name: 'Dynamic Button' }).click();
  await page.getByRole('button', { name: 'STOP' }).click();


});