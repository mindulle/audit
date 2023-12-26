
// Problem

// You have a local variable that's used to store various intermediate

let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);

// Solution

// Use different variables for different values. Each variable should be
// responsible for only one particular thing.

const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

/**
### Why Refactor

If you're skimping on the number of variables inside a function and
reusing them for various unrelated purposes, you're sure to encounter
problems as soon as you need to make changes to the code containing the
variables. You will have to recheck each case of variable use to make
sure that the correct values are used.

### How to Refactor

1.  Find the first place in the code where the variable is given a
    value. Here you should rename the variable with a name that
    corresponds to the value being assigned.

2.  Use the new name instead of the old one in places where this value
    of the variable is used.

3.  Repeat as needed for places where the variable is assigned a
    different value.
 */