//Copy elements within the array using copyWithin() to shift the second element to the fourth position.

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.copyWithin(3, 1, 2);
console.log(arr); //Output will be ['a', 'b', 'c', 'b', 'e']

