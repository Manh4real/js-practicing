/*jshint esversion: 6*/
// let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// // now titles = ["Consul", "of the Roman Republic"]
// console.log(titles.length);




// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };
// // { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;
// // width -> w
// // height -> h
// // title -> title
// console.log(title);  // Menu
// console.log(w);      // 100
// console.log(h);      // 200





// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // destructuring assignment split in multiple lines for clarity
// let {
//   size,
//   items, // assign items here
//   title = "Menu" // not present in the object (default value is used)
// } = options;
// console.log(size, items, title);





// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// // ...and it immediately expands it to variables
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – taken from options,
//   // width, height – defaults used
//   console.log( `${title} ${width} ${height}` ); // My Menu 200 100
//   console.log( items ); // Item1, Item2
// }

// showMenu(options);





// let salaries = {
// };
// function topSalary(salaries){
// 	let max = 0;
// 	let topPaid = null;
// 	for(let [name, mana] of Object.entries(salaries))
// 	{
// 		[topPaid, max] = max < mana ? [name, mana]: [topPaid, max];
// 	}
// 	return topPaid;
// }
// console.log(topSalary(salaries));
// added for "heating up" prior to the main loop

// function getSecondsToday(){
// 	let date = new Date();
// 	return date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
// }
// function getSecondsToTomorrow(){
// 	return 24 * 3600 - getSecondsToday();
// }
// console.log(getSecondsToday());
// console.log(getSecondsToTomorrow());


function formatDate(date){
	let ms = Date.now() - date;
	let seconds = ((Date.now() - date) / 1000).toFixed(0);
	let minutes = ((Date.now() - date) / (1000 * 60)).toFixed(0);
	if (ms < 1000) return "right now";
	else if (ms < 1000 * 60) return ""+seconds+" sec. ago";
	else if (ms < 1000 * 60 * 60) return ""+minutes+" min. ago";
	else return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}: ${date.getMinutes()}`; 
}
console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
// yesterday's date like 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );