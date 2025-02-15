//Write a program to check whether character is uppercase or lowercase alphabet using if else

let char = "A";

if (char >= "A" && char <= "Z") {
  console.log(`${char} is UpperCase Alphabet`);
} else if (char >= "a" && char <= "z") {
  console.log(`${char} is LowerCase Alphabet`);
} else {
  console.log(`${char} is not an Alphabet`);
}

//Output: A is UpperCase Alphabet
