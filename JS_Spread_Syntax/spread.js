function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

const numbers = [3, 76534, 23];

const result = sum(...numbers);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];
console.log(mergedArray);

let colors = ['red', 'green', 'blue'];
let extendnedColors = ['yellow', ...colors, 'purple'];
console.log(extendnedColors);

const person = {name: 'John', age: 30};

let newPerson = {...person, name: 'Jane', gender: 'female'};
console.log(person);
console.log(newPerson);

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };


const combinedObject = { ...object1, ...object2 };

console.log(combinedObject);