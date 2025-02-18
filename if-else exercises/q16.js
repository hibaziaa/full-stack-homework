//Write a program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.

let side1 = 5;
let side2 = 5;
let side3 = 5;

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side3 === side1) {
  console.log("Isosceles Triangle");
} else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
  console.log("Scalene Triangle");
} else {
  console.log("Invalid Input ! Please enter valid sides of a triangle");
}

//Output: Equilateral Triangle
