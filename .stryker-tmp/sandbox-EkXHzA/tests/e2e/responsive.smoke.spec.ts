// @ts-nocheck
import { test, expect } from '@playwright/test';

const viewports = [
  { width: 375, height: 667, name: 'mobile' },
  { width: 768, height: 1024, name: 'tablet' },
  { width: 1280, height: 800, name: 'desktop' },
];

test.describe('Responsive Smoke', () => {
  for (const vp of viewports) {
    test(`layout at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      // basic smoke: headings visible and New Task button reachable
      await expect(page.getByRole('heading', { name: 'To Do' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'New Task' })).toBeVisible();
    });
  }
});
