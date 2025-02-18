// Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, calculate percentage and grade according to given conditions:
// If percentage >= 90% : Grade A
// If percentage >= 80% : Grade B
// If percentage >= 70% : Grade C
// If percentage >= 60% : Grade D
// If percentage >= 40% : Grade E
// If percentage < 40% : Grade F

let physics = 80;
let chemistry = 90;
let biology = 70;
let mathematics = 60;
let computer = 70;
let totalMarks = 500;

let percentage =
  ((physics + chemistry + biology + mathematics + computer) / totalMarks) * 100;

if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 80) {
  console.log("Grade B");
} else if (percentage >= 70) {
  console.log("Grade C");
} else if (percentage >= 60) {
  console.log("Grade D");
} else if (percentage >= 40) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}

//Output: Grade C
