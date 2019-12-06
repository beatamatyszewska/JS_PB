//////// --> TASK 1 <-- From years in array check for leap years [1974, 1900, 1985, 2000]
// Rok jest rokiem przestępnym, jeśli spełnione są następujące warunki:
// *jest podzielny przez 4, 
// *nie jest podzielny przez 100, chyba, ze jest podzielny przez 400
// Operator % -> reszta z dzielenia (modulo)

// let years = [1974, 1900, 1985, 2000];
// let year;
// for(let i=0; i<years.length; i++){
//     year = years[i];
//         if(year % 4 === 0 && (year % 100 !== 0 || year %400 === 0))   {
//         year;
//     }
// }
// console.log(year);

// ----> 2) Calculate factorial of 7
// Silnia -> (7!)
// 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7

// let factorial = 7;
// result = 1;
// for (let i = 2; i <= factorial; i++) {
//     result *= i;
// }
// console.log(result);

//Na jednej zmiennej
// let factorial = 1;
// for(i = 1; i <= 7; i++) {
//     factorial  *= i;
// }
// console.log(factorial)

// rozwiązania z zajęć
// let i=1;
// let result =1;
// while(i<=7){
//     result = result * i;
//     i++;
// }
// console.log(result);

// let n = 7;
// let summary = 1
// while( n > 0 ){
//     summary *= n--;
//     console.log(summary);
// }

// ----> 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//         sum += array[i];
//     }
// }
// console.log(sum);

// ----> 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
// Zakładamy, że minimalna i maksymalna wartość to pierwszy element tablicy, a potem porównujemy z kazdym elementem w tablicy i jak coś to nadpisujemy.
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let min = array[0];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//     if(array[i] < min) {
//         min = array[i];
//     }
//     if (array[i] > max) {
//         max = array[i];
//     }
// }
// console.log(min);
// console.log(max);

// ------> 5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 
// let array = ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend'];
// let long = '';
// for (let i = 0; i < array.length; i++) {
//     if (array[i].length > long.length) {
//         long = array[i];
//     }
// }
// console.log(long);

// -----> 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 
// let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// // empty array for index values
// let indexValues = [0];

// // starting assumption
// let highest = numbers[0];

// // loop for finding the highest value
// for (let i = 1; i < numbers.length; i++) {

//     if (numbers[i] > highest) {
//         highest = numbers[i];
//         indexValues = [];
//         indexValues.push(i);
//     } else if (numbers[i] == highest) {
//         indexValues.push(i);
//     }
// }

// -----> 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let evenNumber = [];

// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         evenNumber.push(array[i]);
//     }
// }
// console.log(evenNumber);

// let sum = 0;
// for (let i = 0; i < evenNumber.length; i++) {
//     sum += evenNumber[i];
// }
// console.log(sum);
// console.log(sum/evenNumber.length);

// krócej

// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let len = tab.length;
// let sum = 0;
// let number = 0;

// for( i = 0; i<len; i++)
// {
//     if(tab[i] % 2 == 0 )
//     {
//         sum +=tab[i];
//         number +=1;
//     }
// }
// console.log("Wartość Średnia dla podanych liczb parzystych wynosi ", sum/number);


// --------> 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let evenIndex = [];
// for (i = 2; i < array.length; i++) {
//     if ([i] % 2 === 0) {
//         evenIndex.push(array[i]);
//     }
// }
// console.log(evenIndex);

// let sum = 0;
// for (i = 0; i < evenIndex.length; i++) {
//     sum += (evenIndex[i]);
// }
// console.log(sum);
// console.log(sum/evenIndex.length);

// ------> 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// let result = 0;
// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         result += array[i]
//     }
//     if (array[i] % 2 !== 0) {
//         result -= array[i];
//     }
// }
// console.log(result);