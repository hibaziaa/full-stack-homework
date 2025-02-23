//Remove the last element from the array using pop().  
//Add an element to the end of the array using push().  
//Remove the first element from the array using shift().  
//Add an element to the beginning of the array using unshift(). 

let names = ['John', 'Jane', 'James', 'Judy'];
console.log(names.pop()); //Judy
console.log(names); //['John', 'Jane', 'James']

names.push('Jill'); 
console.log(names); //['John', 'Jane', 'James', 'Jill']

console.log(names.shift()); //John
console.log(names);//['Jane', 'James', 'Jill']

names.unshift('Jack');
console.log(names); //['Jack', 'Jane', 'James', 'Jill']