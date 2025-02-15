//Write a program to check whether the given character is alphabet or not

let char = 'a'; 

if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    console.log(`${char} is an alphabet`);
} else {
    console.log(`${char} is not an alphabet`);
}   

//Output: a is an alphabet