//Remove the first element without modifying the original array using toSpliced()

let arr = [1, 2, 3, 4, 5];

let newArr = arr.toSpliced(0, 1);

console.log(newArr); // [2, 3, 4, 5]
console.log(arr);    // [1, 2, 3, 4, 5] (Original remains unchanged)
