
let age = 20;

// Assignment operators::

// age += 10; // 30
// age -= 5; // 15
// age *= 2; // 40
// age /= 2;  // 10
// age %= 3; // 2

function assgnOpr() {
    let age = 20;

    console.log(age += 5); // age = 25
    console.log(age -= 5); // age = age-5 => age = 25-5 == 20
    console.log(age *= 2); // age = 40
    console.log(age /= 2); // 20
    console.log(age %= 2); // 0
}

// assgnOpr();


function arithOpe() {
    console.log(10 + 20); // 30
    console.log(20 - 10); // 10
    console.log(10 * 20); // 200
    console.log(20 / 10); // 2
    console.log(20 % 10); // 0
}

// arithOpe();

function compOpr() {

    let a = 10;
    let b = 20;
    let c = 10;
    let d = '10';

    console.log('a == c :: ', a == c); // true
    console.log('a == b :: ', a == b); // flase

    console.log('a != c :: ', a != c); // false
    console.log('a != b :: ', a != b); // true

    console.log('a < c :: ', a < c); // false
    console.log('a < b :: ', a < b); // true

    console.log('a <= c :: ', a <= c); // true
    console.log('a <= b :: ', a <= b); // true
    console.log('b <= c :: ', b <= c); // false


    console.log('a > b :: ', a > b); // false
    console.log('b > c :: ', b > c); // true

    console.log('a >= b :: ', a >= b); // false
    console.log('b >= c :: ', a >= c); // true
    console.log('b >= b :: ', b >= a); // true

    console.log('a === c :: ', a === c); // true
    console.log('a == b :: ', a === b); // flase
    // console.log('a == d :: ', a === d); // flase

    console.log('a !== c :: ', a !== c); // false
    console.log('a !== b :: ', a !== b); // true
    // console.log('a !== d :: ', a !== d); // true

}

// compOpr();

function terOpr(age: number, name: string) {

    let status = (age >= 18) ? "Major" : "Minor";
    console.log(name, status);

}

// terOpr(18, "Chandra"); // Major
// terOpr(17, "SHekhar"); // Minor


function andOpr() {

    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && true); // false
    console.log(false && false); // false

}

// andOpr();

function orOpr() {

    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false

}

// orOpr();

function notOpr() {

    console.log(!true); // false
    console.log(!false); // true

}

// notOpr();

function incOpr() {

    let x: number = 10;
    console.log(x); // 10
    console.log(++x); // ++x => x = x + 1 --- 11
    console.log(x); // 11
    console.log(x++); // 11. x = x + 1 ==> 12
    console.log(x); // 12

}

// incOpr();

function decOpr() {
    let x: number = 10;
    console.log(x); // 10
    console.log(--x); // --x => x = x - 1 --- 9
    console.log(x); // 9
    console.log(x--); // 9. x = x - 1 ==> 8
    console.log(x); // 8

}

decOpr()




