//////// --> TASK 1 <--
// Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// let myArray = [1,3,5,7,9,11,13,14];
// const arraySum = (array) => 
// {let result = 0;
// for (let i = 0; i< array.length; i++) {
//         result += array[i];
//     }
//     return result; 
// }
// console.log(arraySum(myArray));

//////// --> TASK 2 <--
// Create a function that returns sum of first and last elements of given array.
// let myArray = [1,3,5,7,9,11,13,14];
// function sumFirstLast(array) {
//     let result = array[0] + array[array.length-1];
//     return result; 
// }
// console.log(sumFirstLast(myArray));

//////// --> TASK 3 <--
// Create a function that takes a number and return factorial of that number.
// function factorial(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(7));

// Funkcja może być rekurencyjna, czyli wywoływać samą siebie.
// function factorial(number) {
//     if (number < 1)
//        return 1
//     else {
//        let result = (number * factorial(number - 1));
//        return result
//     }
// }
// console.log(factorial(7));

//////// --> TASK 4 <--
// Create a function that returns given array in reverse order. no build in functions 
// let myArray = [1,3,5,7,9,11,13,14];
// let reverseArray = (array) => {
//     return array.reverse()
// };
// console.log(reverseArray(myArray));

//no build in functions 
// let myArray = [1,3,5,7,9,11,13,14];
// function reverseArray(array) {
//     let newArray = [];
//     for (let i = array.length-1; i >= 0; i--) {
//         newArray.push(array[i]);
//     }
// return newArray    
// }
// console.log(reverseArray(myArray));

//////// --> TASK 5 <--
// Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// let myArray = [1,3,5,7,9,11,13,14];
// const sumTwoIndexInArray = (array) => {
//     let newArray = [];
//     newArray.push(array[0] + array[1]);
//     newArray.push(array[2] + array[3]);
//     newArray.push(array[4] + array[5]);
//     return newArray
// }
// console.log(sumTwoIndexInArray(myArray));

//////// --> TASK 6 <--
// For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// let myArray = [1,3,5,7,9,11,13,14];
// const sumTwoIndexInArray = (array) => {
//     let newArray = [];
//     newArray.push(array[0] + array[1]);
//     newArray.push(array[2] + array[3]);
//     newArray.push(array[4] + array[4]);
//     return newArray
// }
// console.log(sumTwoIndexInArray(myArray));

//////// --> TASK 7 <--
// Create a function the return one random element from given array. // use random function 
// let myArray = [1,3,5,7,9,11,13,14];
// const randomNumber = (array) => {
//     let randomIndex = (Math.floor(Math.random() * array.length));
//     return array[randomIndex];
// }
// console.log(randomNumber(myArray));

