//Write a program to find maximum between three numbers

let num1 = 9;
let num2 = 12;
let num3 = 8;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater than ${num1} and ${num3}`);
} else { 
    console.log(`${num3} is greater than ${num1} and ${num2}`);
}

//output: 12 is greater than 9 and 8