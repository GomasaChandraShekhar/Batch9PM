

// print num 0 to 5   code reusability

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


// 0 to 100


function forLoop() {

    // 1 - 5
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// forLoop();

function forBreak() {

    for (let i = 0; i <= 5; i++) {
        // break loop if i=3;
        if (i == 3) {
            break; // terminating the loop
        }
        console.log(i);
    }
    console.log('Out of for loop');
}

// forBreak();

function forContinue() {

    for (let i = 0; i <= 5; i++) {
        if (i == 3) {
            continue; // skip the current execution and continue executing next iteration
        }
        console.log(i);

    }
    console.log('Out of for loop');

}
forContinue();

function whilestmt() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

// whilestmt();

function dowhilestmt() {
    let i = 1;
    do {

        if (i == 5) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    }
    while (i <= 10);
}
// dowhilestmt();