function multiplyValue(a: number, b?: number) {
    if (b === undefined) {

        return a * 2;
    }

    else {
        return a * b;
    }

};

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

function formatCoordinate (coordinate: readonly [number, number, string]) {

    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`

};

function concatenateArrays <T>(...arrays: T[][]): T[] {
    const result: T[] = [];

    for (const array of arrays) {
        for (const item of array) {
            result.push(item);
        }
    }

    return result;
};


interface  Course {
    title: string;
    students: number;

    isPublished: boolean;
}

function getPopularCourses (courses: Course[],minStudents: number) : Course[] {

    return  courses.filter(
        (course) =>
        course.isPublished && course.students >= minStudents
    );

};


function pluckValues<T, K extends keyof T>(
    items: T[],
    key: K
  ): T[K][] {
    return items.map((item) => item[key]);
  };



  class Employee {
    constructor(protected name: string, private baseSalary: number) {
    
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, baseSalary: number,private department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
};  


