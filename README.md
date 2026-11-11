## 1.multiplyValue(a, b?)
- two parameter number  a and optional b
- If b is not given, it multiplies a by 2
- If b is given, it multiplies a by b

## 2.processInput(value)
 - Takes a string or number, or boolean value.
 - If the value is a string, it removes extra spaces and converts it to lowercase.
 - If it is a number, it multiplies it by 10.
 - If it is boolean, it returns "Active" or  "Inactive".

## 3.formatCoordinate(coordinate)
 - Takes latitude, longitude, and location name.
 - Returns the location information in a formatted string.
 - The readonly keyword means the tuple values cannot be changed.

## 4.concatenateArrays<T>()
- Takes multiple arrays as input.
- all arrays into one array.

## 5.getPopularCourses()
- Course Interface use
- Defines the structure of a course.
- Every course must have three properties:
- title Course name.
- students Number of students.
- isPublished  Published status (true or false).
- Takes a course array and a minimum student number.


## 6.pluckValues<T, K>()
- Takes an array of objects and a property name.
- Gets the selected property value from each object.
- Returns all selected values in a new array.


## 7.Manager Class
- Creates an Employee class.
- Takes employee name and base salary
- Uses protected and private to control access to properties
- The getDetails() method returns employee information
- Extends the Employee class.
- Adds a new property called department.
- Uses super() to call the parent class constructor.
- The getRoleInfo() method returns the manager's information.


## 8.validateAgeAsync(age)
- Takes a person's age as input.
- Returns a Promise.
- If the age is below 18, it rejects the Promise.
- If the age is 18 or above, it waits 1 second and then resolves the Promise.
- Uses setTimeout() to create a delay.

##  Blog Post 
[TYPE-NARROWING](./type-narrowing.md) 

[TYPE-VS-INTERFACE](./type-vs-interface.md)