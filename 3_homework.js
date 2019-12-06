//////// --> TASK 1 <--
// Create an iffe that returns an object with fields:
// function setValue(), function showValue() and function reverseValue().
// Calling functions either logs the value or reverse it in an object.
// If value was not provided yet or is empty showValue function is to return information about that.
// Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.
// Closure pattern.

//iife:
// (function() {
//     //some code
// })();

// const iife = (function() {
//     let value; // local variable
//     const setValue = function(newValue) {
//         return value = newValue
//     };
//     const showValue = function() {
//         if(typeof value === 'undefined') {
//             return 'Value is not provided or is empty'
//         } else {
//             return value
//         }
//     };
//     const reverseValue = function() {
//         if(typeof value === 'string') {
//             return [...value].reverse().join('') //spread syntax (ES6) + reverse() method for arrays + join it all back together
//         } else if (typeof value === 'number') {
//             return (value * (-1))
//         }
//     }
//     return {setValue, showValue, reverseValue} //return object
// })();
// //string
// console.log(iife.setValue('beata'));
// console.log(iife.showValue());
// console.log(iife.reverseValue());
// //number
// console.log(iife.setValue(30));
// console.log(iife.showValue());
// console.log(iife.reverseValue());
// //value is not provided
// console.log(iife.setValue());
// console.log(iife.showValue());
// console.log(iife.reverseValue());

//////// --> TASK 2 <--
//Create four function definitions. One for every basic math operations and taking two input parameters.
//Create one more function. This function is to return calculation object.
//This object is to have parameters object field that holds two operation parameters inside (x and y)
//and a function field that points to a function with math operation (defined at the beginning).
//A function setOperation() that sets the field from previous sentence
//and a calculate() function that makes calculation and returns its value.

// const add = (x,y) => x+y;
// const subtraction = (x,y) => x-y;
// const multiplication = (x,y) => x*y;
// const division = (x,y) => x/y;
// const calculator = (function() {
//     let x, y, mathOpertation;
//     return {
//         SetOperation: function(newX, newY, newMathOperation){
//             x = newX;
//             y = newY;
//             mathOpertation = newMathOperation;
//         },
//         calculate: function() {
//             return (mathOpertation(x,y))
//         }
//     }
// })();
// calculator.SetOperation(20,10,add);
// console.log(calculator.calculate());

//////// --> TASK 3 <--
//Create an array (by hand) of objects and call sum() function in context of each one of them.
//Sum function is to come from this object
//BaseObject = { X,y, sum: function (){ return this.x+this.y}}
//Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8}
//Tablice to takze obiekty

// const array = [{x:2, y:3}, {x:-1, y:6}, {x:0, y:8}];
// let sumArray = [];
// const baseObject = {
//     x: 0,
//     y: 0,
//     sum: function () {
//       return this.x + this.y;
//     }
// };
// for(let i = 0; i<array.length; i++) {
//     sumArray.push(baseObject.sum.call(array[i])); //call (metoda call() idealnie nadaje się do "zapożyczania" funkcji z innych obiektów -> obiekt + metoda + kontekst
// }
// console.log(sumArray);
// console.log(array);

//////// --> TASK 4 <--
//Given an array of objects, for each object call operation() function in context of next object.
//If object is last, got back to start of the array for operation function. In loop;

// const array = [
//   {
//     x: 1,
//     y: "object one value",
//     operation: function() {
//       return `operation one prefix ${this.x} ${this.y}`;
//     }
//   },
//   {
//     x: 2,
//     y: "object two value",
//     operation: function() {
//       return `operation one prefix ${this.x} ${this.y}`;
//     }
//   },
//   {
//     x: 3,
//     y: "object three value",
//     operation: function() {
//       return `operation one prefix ${this.x} ${this.y}`;
//     }
//   }
// ];
// for (let i = 0; i < array.length; i ++) {
//     console.log(array[i].operation.call(array[(i + 1) % 3]));
// };
