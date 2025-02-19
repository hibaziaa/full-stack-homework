//write a program to print sum of all odd numbers from 1 to n using while loop

let n = 10;
let sum = 0;
let i = 1;

while (i <= 10) {
  if (i % 2) {
    sum = sum + i;
    console.log(`iteration ${i}`);
    console.log(`sum of odd numbers ${sum}`);
  }
  i++;
}