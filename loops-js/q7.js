//write a program to print sum of all even numbers from 1 to n using while loop

let n = 10;
let sum = 0;
let i = 1;

while (i <= 10) {
  if (i % 2 === 0) {
    sum = sum + i;
    console.log(`iteration ${i}`);
    console.log(`sum of even numbers ${sum}`);
  }
  i++;
}
