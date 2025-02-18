//Write a program to print minimum number of notes (Rs. 500, 100, 50, 20, 10, 5, 2, 1) required for the amount using if else. 

// Fixed amount
let amount = 786;

// Initializing note counts
let note500 = 0, note100 = 0, note50 = 0, note20 = 0, note10 = 0, note5 = 0, note2 = 0, note1 = 0;

// Checking each denomination
if (amount >= 500) {
    note500 = Math.floor(amount / 500);
    amount %= 500;
    console.log("500 : " + note500);
}

if (amount >= 100) {
    note100 = Math.floor(amount / 100);
    amount %= 100;
    console.log("100 : " + note100);
}

if (amount >= 50) {
    note50 = Math.floor(amount / 50);
    amount %= 50;
    console.log("50  : " + note50);
}

if (amount >= 20) {
    note20 = Math.floor(amount / 20);
    amount %= 20;
    console.log("20  : " + note20);
}

if (amount >= 10) {
    note10 = Math.floor(amount / 10);
    amount %= 10;
    console.log("10  : " + note10);
}

if (amount >= 5) {
    note5 = Math.floor(amount / 5);
    amount %= 5;
    console.log("5   : " + note5);
}

if (amount >= 2) {
    note2 = Math.floor(amount / 2);
    amount %= 2;
    console.log("2   : " + note2);
}

if (amount >= 1) {
    note1 = amount;
    console.log("1   : " + note1);
}

//Output : 
// 500 : 1
// 100 : 2
// 50  : 1
// 20  : 1
// 10  : 1
// 5   : 1
// 1   : 1