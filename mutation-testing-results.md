# Mutation Testing Results

## Summary
- **Mutation Score**: 94.64%
- **Killed Mutants**: 53
- **Survived Mutants**: 3
- **No Coverage Mutants**: 0
- **Errors**: 0

## Detailed Results

### Survived Mutants

1. **ConditionalExpression**  
   File: `src/lib/dnd/adapter.ts`  
   Line: 36  
   ```diff
   - if (col.id === overColumn.id) {
   + if (true) {
   ```

2. **StringLiteral**  
   File: `src/utils/localStorage.ts`  
   Line: 8  
   ```diff
   - console.error('Failed to load board state from localStorage', err);
   + console.error("", err);
   ```

3. **StringLiteral**  
   File: `src/utils/localStorage.ts`  
   Line: 17  
   ```diff
   - console.error('Failed to save board state to localStorage', err);
   + console.error("", err);
   ```

## Additional Information
- The HTML report can be found at: `reports/mutation/mutation.html`