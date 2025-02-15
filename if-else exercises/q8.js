// Write a program to check whether an alphabet is vowel or consonant using if else.

let char = "u";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u" ||
  char === "A" ||
  char === "E" ||
  char === "I" ||
  char === "O" ||
  char === "U"
) {
  console.log(`${char} is a vowel`);
} else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
  console.log(`${char} is a consonant`);
} else {
  console.log(`${char} is not an alphabet`);
}

//output: u is a vowel
