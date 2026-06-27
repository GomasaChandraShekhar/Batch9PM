
let arr1 = ['Playwright', 1.59, 'Microsoft', 'Typescript', 'USA', true];

const arr2: string[] = ['Playwright', 'Microsoft', 'Typescript', 'USA'];

let arr3: number[] = [10, 20, 30, 40, 50];

const arr4: (string | number | boolean)[] = [100, true, 'playwright', 101, 102, 'Shekhar', 'Charmi', 10, 'Rathna', 20, 'chandra', 30, 'Harsha', 40];

// console.log(arr4[0]); // 100
// console.log(arr4[2]); // playwright
// console.log(arr4[6]); // Charmi

arr4[0] = 200;

// console.log(arr4[0]); // 200

arr4[2] = 'Typescript';
// console.log(arr4[2]); // Typescript

// console.log(arr4.length)

// for loop
// for (let ind = 0; ind < arr4.length; ind++) {
//     console.log(arr4[ind]);
// }

// for of loop - value
// for (const value of arr4) {
//     console.log(value);
// }


// for in loop - index
// for (const index in arr4) {
//     console.log(arr4[index]);
// }

const data1: Array<string> = [];

const data2: Array<number> = [10, 20, 30, 40, 50];

const data3: Array<string | number> = [100, 'playwright', 101, 102, 'Shekhar', 'Charmi', 10, 'Rathna', 20, 'chandra', 30, 'Harsha', 40];;

const data4: Array<string | number | boolean> = [100, true, 'playwright', 101, 102, 'Shekhar', 'Charmi', 10, 'Rathna', 20, 'chandra', 30, 'Harsha', 40];;

for (const key in data4) {
    console.log(data4[key]);
}

//======================

// Tuple ::

let person: [string, number] = ["Alice", 25];
console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 25

let person1: [string, number, number, string];
person1 = ['Typescript', 35, 9100774577, 'Hyderabad'];

console.log(person1.length);
console.log(person1[2]); // 9100774577


