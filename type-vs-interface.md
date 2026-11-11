# Type aliases and interface 

# Introduction:
   In TypeScript, both Type Aliases and Interfaces are used to define the structure of objects.


## Differences between type aliases and interface in TypeScrip

 - Interface user for Object Structure 
 - Type aliases user for Object Structure
 - Interface  declaration merging use  
 - Type aliases declaration merging no use 
 - Type aliases  union types supported 
 - Interface union types not supported 
 - Type aliases Tupe types supported 
 - Interface Tupe types not directly supported
 - Type aliases primitive types supported
 - Interface primitive types not directly supported

**Type aliases : syntax**

 type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Rahim",
  age: 25,
  email: "rahim@gmail.com"
};
 
Type aliases : syntax

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Rahim",
  age: 25,
  email: "rahim@gmail.com"
};

# Conclusion:
   Both Type Aliases and Interfaces are used to define object structures in TypeScript