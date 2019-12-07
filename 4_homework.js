//////// --> TASK 1 <--
//Extend String type with the reverse() function.
//The function is to reverse the value of the string on which it was called.

// String.prototype.reverse = function() {
//     return this.split("").reverse().join(""); // this oznacza obiekt string / split zmienia ciag string na tablice
// };
// let test = "Ala ma kota";
// console.log(test.reverse());

//////// --> TASK 2 <--
//Extend Number type with the reverse() function.
//The function is to reverse the value of the Number on which it was called.

// Number.prototype.reverse = function() {
//     return this.toString().split("").reverse().join(""); // this oznacza obiekt string / split zmienia ciag  string na tablice
// };
// let test = 1234567;
// console.log(test.reverse());

//////// --> TASK 3 <--
// Based on included JSON file.

// function DetailsOfPayent(f, g, h) {
//     (this.Type = 3), //f
//       (this.company = "ECSTASIA"), //g
//       (this.date = "09-07-2014"); //h
//   }

//   function MainEntry(a, s, d, f, g, h) {
//     (this.index = 0), //a
//       (this._id = "5c01097e566bb68fe9611b25"), //s
//       (this.cost = 434.25), //d
//       (this.detailsOfPayent = new DetailsOfPayent(f, g, h));
//   }

//Bieda próba
// const jsonFile = require("./data.json");
// console.log(jsonFile);

// --- a) Create a function that will return Json from the file. ---
// function returnJson() {
//     const jsonFile = require('./data.json');
//     return jsonFile;
// };
// console.log(returnJson());

// //Your data is already an object. No need to parse it. The javascript interpreter has already parsed it for you.
// // --- b) Create a structures to hold data from the file. ---

// const dataFromFile = returnJson();
// console.log(dataFromFile);

// //SyntaxError: Unexpected token o in JSON at position 1
// //Your data is already an object. No need to parse it. The javascript interpreter has already parsed it for you.

// // copy json
// // {
// //     "index": 0,
// //     "_id": "5c01097e566bb68fe9611b25",
// //     "cost": "434.25",
// //     "detailsOfPayent": {
// //       "Type": 3,
// //       "company": "ECSTASIA",
// //       "date": "09-07-2014"
// //     }
// //   },

// // --- c) Map data from function a to structure from b ---

// let mapData = dataFromFile.map(item => {
//     return `
//     index: ${item.index},
//     _id: ${item._id},
//     cost: ${item.cost},
//     detailsOfPayent: ${item.detailsOfPayment}`
// });

// console.log(mapData);

// // --- d) Create object that will give us data about:
// // --- d.1) How much money was spend in 2014
// // --- d.2) What company was earning how much
