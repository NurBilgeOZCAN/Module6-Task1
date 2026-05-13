// @ts-nocheck
import { test, expect } from '@playwright/test';

test.describe('Manage Board - create/edit/delete', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('creates, edits, and deletes a task', async ({ page }) => {
    page.on('dialog', async (dialog) => {
      await dialog.accept();
    });

    // Create
    await page.getByRole('button', { name: 'New Task' }).click();
    await page.getByPlaceholder('What needs to be done?').fill('E2E Create Task');
    await page.getByPlaceholder('Add more details...').fill('E2E description');
    await page.getByLabel('Priority').selectOption('High');
    await page.getByRole('button', { name: 'Create Task' }).click();

    await expect(page.getByText('E2E Create Task')).toBeVisible();

    // Edit
    const card = page.getByRole('listitem', { name: 'Task: E2E Create Task' });
    await card.hover();
    await page.evaluate(() => {
      const btn = document.querySelector('[aria-label="Edit task: E2E Create Task"]') as HTMLElement | null;
      btn?.click();
    });
    const title = page.locator('input#title');
    await expect(title).toBeVisible();
    await expect(title).toHaveValue('E2E Create Task');
    await title.fill('E2E Edited Task');
    await page.getByRole('button', { name: 'Save Changes' }).click();
    await expect(page.getByText('E2E Edited Task')).toBeVisible();

    // Delete (confirm dialog handled above)
    await page.evaluate(() => {
      const btn = document.querySelector('[aria-label="Delete task: E2E Edited Task"]') as HTMLElement | null;
      btn?.click();
    });
    await page.waitForSelector('text=E2E Edited Task', { state: 'detached' });
  });
});
