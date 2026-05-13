import { test, expect } from '@playwright/test';

test.describe('Keyboard Shortcut', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('pressing n opens TaskForm when not focused in input', async ({ page }) => {
    await page.focus('body');
    await page.keyboard.press('n');
    await expect(page.getByRole('heading', { name: 'New Task' })).toBeVisible();
  });

  test('pressing n does not open form when focused inside input', async ({ page }) => {
    await page.getByRole('button', { name: 'New Task' }).click();
    await page.getByLabel('Title').focus();
    await page.keyboard.press('n');
    await expect(page.getByRole('heading', { name: 'New Task' })).toBeVisible();
  });
});
