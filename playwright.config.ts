import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.spec.ts',
  projects: [
    {
      name: 'msedge',
      use: {
        channel: 'msedge',
        headless: true,
        baseURL: 'http://localhost:5173'
      }
    }
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
    timeout: 120000
  }
});