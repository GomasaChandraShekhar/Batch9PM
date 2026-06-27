import { Student } from './Student';

// Object without type
const person = {
    name: 'Chandra',
    age: 35,
    city: 'Hyderabad',
    country: 'India'
}

// Dot noation (.)
// console.log(person.name);
// console.log(person.age);

// Bracket Notaion ( [] )
// console.log(person['city']);
// console.log(person[`country`]);

// console.log(person);
// console.table(person);

// for (let ele in person) {
//     console.log(ele, person[ele]);
// }

// for (const [key, value] of Object.entries(person)) {
//     console.log(`${key}: ${value}`);
//     console.log(`Key is :: ${key} and Value is ::  ${value}`);
// }

// for (const key in person) {
//     const value = person[key];
//     console.log(value);
// }


// Object with Type

export const employee: {
    firstName: string; lastName: string; age: number; jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// console.table(employee);

// console.log(employee.firstName, employee.lastName, employee.age, employee.jobTitle);

// console.log(employee['age'], employee['firstName'], employee['lastName'], employee['jobTitle']);

let student = new Student('Shekhar', 40, 100, 'Hyderabad');

student.getDetails();