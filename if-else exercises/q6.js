//Write a program to check leap year using if else

let year = 2006;

if (!(year % 4) && year % 100) {
  console.log(`${year} is a leap year`);
} else if (!(year % 400)) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

//Output: 2006 is not a leap year
