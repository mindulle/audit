// Problem
// You have an expression that's hard to understand.

renderBanner(): void {
  if ((platform.toUpperCase().indexOf("MAC") > -1) &&
       (browser.toUpperCase().indexOf("IE") > -1) &&
        wasInitialized() && resize > 0 )
  {
    // do something
  }
}

// Solution
// Place the result of the expression or its parts in separate variables
// that are self-explanatory.

renderBanner(): void {
  const isMacOs = platform.toUpperCase().indexOf("MAC") > -1;
  const isIE = browser.toUpperCase().indexOf("IE") > -1;
  const wasResized = resize > 0;

  if (isMacOs && isIE && wasInitialized() && wasResized) {
    // do something
  }
}

/**
### Why Refactor

The main reason for extracting variables is to make a complex expression
more understandable, by dividing it into its intermediate parts. These
could be:

-   Condition of the `if()` operator or a part of the `?:` operator in
    C-based languages

-   A long arithmetic expression without intermediate results

-   Long multipart lines

Extracting a variable may be the first step towards performing Extract
Method if you see that the extracted expression is used in other places in your code.

### How to Refactor

1.  Insert a new line before the relevant expression and declare a new
    variable there. Assign part of the complex expression to this
    variable.

2.  Replace that part of the expression with the new variable.

3.  Repeat the process for all complex parts of the expression.
*/