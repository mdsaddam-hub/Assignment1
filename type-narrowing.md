# TypeScript Narrowing 

# Introduction:

Type Narrowing in TypeScript means reducing a variable's type based on a condition


- Type Narrowing is a technique in TypeScript that helps developers reduce a variables 
type from specific type.

- It allows typescript to understand that type of value a contains at a particular point in
the code

- Type Narrowing make reduces error and helps developers use type specific methods

## Example: 

function processInput (value: string | number | boolean) {

    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }

    else if (typeof value === 'number') {
        return value * 10;
    }

    else {
        return value ? 'Active' : 'Inactive'
    }

};

# Conclusion :
Type Narrowing makes TypeScript code easier and helps prevent errors.