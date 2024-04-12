/*jshint esversion: 6*/

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// function sortByAge(arr){
// 	arr.sort((a, b) => a.age - b.age);
// }
// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete



// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr){
// 	return arr.reduce((reslt, person) => reslt + person.age, 0) / arr.length;
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28




function unique(arr) {
	let result = [];
	
	for(let name of arr){
		if (!result.includes(name))
			result.push(name);
	}

  	return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O", "Manh"
];

console.log( unique(strings) ); // Hare, Krishna, :-O