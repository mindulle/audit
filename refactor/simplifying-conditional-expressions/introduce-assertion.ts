// Problem
// For a portion of code to work correctly, 
// certain conditions or values must be true.

getExpenseLimit(): number {
  // Should have either expense limit or
  // a primary project.
  return (expenseLimit != NULL_EXPENSE) ?
    expenseLimit:
    primaryProject.getMemberExpenseLimit();
}

// Solution

// Replace these assumptions with specific assertion checks.

getExpenseLimit(): number {
  // TypeScript and JS doesn't have built-in assertions, so we'll use
  // good-old console.error(). You can always extract this into a
  // designated assertion function.
  if (!(expenseLimit != NULL_EXPENSE ||
       (typeof primaryProject !== 'undefined' && primaryProject))) {
      console.error("Assertion failed: getExpenseLimit()");
  }

  return (expenseLimit != NULL_EXPENSE) ?
    expenseLimit:
    primaryProject.getMemberExpenseLimit();
}
