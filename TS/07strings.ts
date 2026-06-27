

// String - immutable - cannot be changed
// index basis 

let sname1: string = 'Shekhar Chandra Gomasa Playwright Trainer';
let sname2: string = "                  Chandra     ";

// console.log(sname1.startsWith('S'));
// console.log(sname1.startsWith('s'));

// console.log(sname1.endsWith('R'));
// console.log(sname1.endsWith('r'));

// console.log(sname1.replace('h', 'o'));
// console.log(sname1.replaceAll('h', 'o'));

// console.log(sname1.indexOf('h')); // 1

// console.log(sname1.lastIndexOf('h'));

// let arr: string[] = sname1.split(' ');
// console.log(arr.length); // 5

// for (const element of arr) {
//     console.log(element);
// }

// console.log(sname1.length); // 7

// console.log(sname1.substring(6, 15));

// console.log(sname1.includes('Chandra')); // false
// console.log(sname2.includes('Chandra')); // true

let sname = sname1.concat(sname2);
// console.log(sname);

// console.log(sname1.endsWith('r')); // true
// console.log(sname1.endsWith('k')); // false
// console.log(sname1.startsWith('S')); // true
// console.log(sname1.startsWith('k')); // false

let sname1Upper = sname1.toUpperCase();
// console.log(sname1Upper);
// console.log(sname1);

let sname1Lower = sname1Upper.toLowerCase();
// console.log(sname1Lower);

// console.log(sname1.charAt(2)); //e
// console.log(sname1.indexOf('k')); //3
// console.log(sname1.indexOf('o')); // -1

// console.log(sname2.trim()); // Chandra
// console.log(sname2.trimStart()); // Chandra
// console.log(sname2.trimEnd()); //          Chandra



