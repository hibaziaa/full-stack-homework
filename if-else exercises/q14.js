//Write a program to check whether a triangle is valid or not if angles are given using if else

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
  console.log("Triangle is valid");
} else {
  console.log("Triangle is not valid");
}   

//Output: Triangle is valid