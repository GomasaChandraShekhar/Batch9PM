
export function test01() {

    console.log('I am test01() function');

}

// test01()

export function test02(sname: string, age: number) {
    // console.log('My name is :: ', sname, " and my age is :: ", age);

    console.log(`My name is :: ${sname} and my age is ::  ${age}`);
}

// test02('Chandra', 35);

// default values
export function test03(language: string, version: number = 15) {
    console.log(`My name is :: ${language} and my age is ::  ${version}`);
}

// test03('typescript', 20);
// test03('javascript');


// optional parameter
export function test04(language: string, version?: number) {
    console.log(`My name is :: ${language} and my age is ::  ${version}`);
}

// test04('typescript', 20);
// test04('javascript');

// Anonymus function - nameless function - function without name
export let msg = function (language: string, version?: number) {
    console.log(`My name is :: ${language} and my age is ::  ${version}`);
}

// msg('typescript', 20);


// Arrow function
export let msg1 = (): number => {
    console.log("I am arrow function");
    return 20;
}
// msg1();

// return type of function
export function getName(): string {
    console.log("");
    return "Chandra";
}

export function getAge(): number {
    return 35;
}

let sname = getName();
let age = getAge();

test04(sname, getAge());



