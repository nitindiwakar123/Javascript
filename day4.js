//Activity 1: For Loop

// Task 1:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task 2:
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i}  = ${5 * i}`);
}

//Activity 2: While Loop

// Task 3:
let sum = 0;
let i = 1;
while (i <= 10) {
    sum = sum + i;
    i++;
}
console.log(`Sum of Numbers 1 to 10 is ${sum}`);

//Task 4:
let num = 10;
while (num>0) {
    console.log(num);
    num = num-1;
}

//Activity 3: Do-While Loop

//Task 5:
let i2 = 1;
do {
    console.log(i2);
    i2++;
} while (i2 <= 5);

//Task 6:
let number = 6;
let val = 1;
let i3 = 1;

do {
    val = val * i3;
    i3 = i3 + 1;
} while (i3 <= number);
console.log(`The Factorial of ${number} is ${val}`);

//Activity 4: Nested Loops
//Task 7:
const n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

//Activity 5: Loop Control Satements

//Task 8:
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);

}

//Task 9:
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);

}