// @ts-nocheck
export default {
  mutate: [
    'src/lib/dnd/adapter.ts',
    'src/utils/localStorage.ts'
  ],
  mutator: 'typescript',
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'vitest',
  vitest: {
    configFile: 'vitest.config.ts'
  },
  coverageAnalysis: 'perTest',
  timeoutMS: 600000,
  thresholds: {
    high: 80,
    low: 60,
    break: 75
  }
};
