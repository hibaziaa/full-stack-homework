//Write a program to find all roots of a quadratic equation using if else.

let a = 1;
let b = 5;
let c = 6;
let discriminant = b * b - 4 * a * c;
let root1, root2;

if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`Roots are real and different: ${root1} and ${root2}`);
} else if (discriminant === 0) {
  root1 = root2 = -b / (2 * a);
  console.log(`Roots are real and same: ${root1} and ${root2}`);
} else {
  let realPart = -b / (2 * a);
  let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
  console.log(
    `Roots are complex and different: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`
  );
}

//Output: Roots are real and different: -2 and -3
