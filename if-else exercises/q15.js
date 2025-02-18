//Write a program to input side of a triangle and check whether triangle is valid or not using if else.

let side1 = 5;
let side2 = 6;
let side3 = 7;

if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
  console.log("Triangle is valid");
} else {
  console.log("Triangle is not valid");
}

//Output: Triangle is valid