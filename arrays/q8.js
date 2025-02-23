//Delete the third element of the array using delete()

let arr = [1, 2, 3, 4, 5];
delete arr[2];
console.log(arr); // Output will be [1, 2, <1 empty item>, 4, 5]
console.log(arr.length); // Output will be 5
console.log(arr[2]); // Output will be undefined