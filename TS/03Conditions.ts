

function ifElseCond(marks: number) {

    // if (marks >= 40) {
    //     console.log("Passed");
    // } else {
    //     console.log("Failed");
    // }

    // 41 % 2 == 0

    if (marks % 2 == 0) {
        console.log('Given number is even Number.');
    } else {
        console.log('Given number is odd Number.');
    }

}

// ifElseCond(42);

function elseIfCode(marks: number) {

    if (marks >= 40 && marks <= 60) {
        console.log("Passed with secnod division.");
    } else if (marks >= 61 && marks <= 80) {
        console.log("Passed with first division.");
    } else if (marks >= 81 && marks <= 100) {
        console.log("Passed with distrinction.");
    } else {
        console.log("Student is failed");
    }
}

// elseIfCode(39);

function switchCase(day: string) {

    switch (day) {

        case "Monday":
            console.log("Monday");
            break;
        case "Tuesday":
            console.log("Tuesday");
            break;
        case "Wednesday":
            console.log("Wednesday");
            break;
        case "Thursday":
            console.log("Thursday");
            break;
        case "Friday":
            console.log("Friday");
            break;
        case "Saturday":
            console.log("Saturday");
            break;
        case "Sunday":
            console.log("Sunday");
            break;

        default:
            console.log("Invalid day.");
    }

    console.log("Out of switch");

}

switchCase("Monday");












