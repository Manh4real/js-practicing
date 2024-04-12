/*jshint esversion: 6*/


// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// function groupById(users){
//   // let obj = {};
//   // users.forEach((user) => {
//   //   obj[user.id] = Object.assign({}, user);
//   // });
//   // return obj;

//   return users.reduce((obj, user) => {
//     obj[user.id] = Object.assign({}, user);
//       return obj;
//   }, {});
// }

// let usersById = groupById(users);
// console.log(usersById);



// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log( unique(values) ); // Hare, Krishna, :-O




// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// function aclean(arr) {
//   let map = new Map();
//   for (let word of arr)
//   {
//     let wrd = word.split("").sort().join("");
//     map.set(wrd, word);
//   }
//   return Array.from(map.values());
// }





let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory!
console.log(weakMap);