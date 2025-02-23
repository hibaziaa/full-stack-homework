//Flatten a nested array using flat(). 

let nestedArr = [1, 2, [3, 4, [5, 6]]];
let flatArr = nestedArr.flat();
console.log(flatArr) //Output will be [1, 2, 3, 4, [5, 6]]

let nestedArr2 = [1, 2, [3, 4, [5, 6]]];
let flatArr2 = nestedArr2.flat(Infinity);
console.log(flatArr2); //Output will be [1, 2, 3, 4, 5, 6]

let nestedArr3 = [1, 2, [3, 4, [5, 6]]];
let flatArr3 = nestedArr3.flat(2);
console.log(flatArr3) //Output will be [1, 2, 3, 4, 5, 6]
