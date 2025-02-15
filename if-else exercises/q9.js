//Write a program to check whether given character is alphabet, digit or special character using if else.

let char = 3; 

if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    console.log(`${char} is an alphabet`);
}   else if (char >= "0" && char <= "9") {  
    console.log(`${char} is a digit`);
} else {
    console.log(`${char} is a special character`);
}   

//Output: 3 is a digit  