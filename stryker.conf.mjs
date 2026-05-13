export default {
  mutate: [
    "src/lib/dnd/adapter.ts",
    "src/utils/localStorage.ts"
  ],
  testRunner: "command",
  commandRunner: {
    command: "npm run test:unit -- --run"
  },
  reporters: ["clear-text", "progress", "html"],
  coverageAnalysis: "off",
  concurrency: 2
};
