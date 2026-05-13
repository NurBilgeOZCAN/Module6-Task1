// @ts-nocheck
export default {
  mutate: [
    'src/lib/dnd/adapter.ts',
    'src/utils/localStorage.ts'
  ],
  packageManager: 'npm',
  testRunner: 'command',
  commandRunner: {
    command: 'npm run test:unit -- --run'
  },
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'perTest',
  timeoutMS: 600000,
  thresholds: {
    high: 80,
    low: 60,
    break: 75
  }
};
