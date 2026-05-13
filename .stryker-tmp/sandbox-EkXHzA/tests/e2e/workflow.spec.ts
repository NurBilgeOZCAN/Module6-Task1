// @ts-nocheck
import { test, expect } from '@playwright/test';

test.describe('Task Board Workflow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the initial board columns', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'To Do' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'In Progress' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Done' })).toBeVisible();
  });

  test('should open and close the task form', async ({ page }) => {
    await page.getByRole('button', { name: 'New Task' }).click();
    await expect(page.getByRole('heading', { name: 'New Task' })).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByRole('heading', { name: 'New Task' })).not.toBeVisible();
  });

  test('should create a new task and display it', async ({ page }) => {
    await page.getByRole('button', { name: 'New Task' }).click();
    const title = 'E2E Task Title';
    const description = 'E2E Task Description';

    await page.getByPlaceholder('What needs to be done?').fill(title);
    await page.getByPlaceholder('Add more details...').fill(description);
    await page.getByLabel('Priority').selectOption('High');
    await page.getByRole('button', { name: 'Create Task' }).click();

    await expect(page.getByText(title)).toBeVisible();
    await expect(page.getByText(description)).toBeVisible();
  });
});
