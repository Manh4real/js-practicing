/*jshint esversion: 6*/


// let user = {
//   name: "John Smith",
//   age: 35
// };
// console.log(JSON.stringify(user));
// console.log(JSON.parse(JSON.stringify(user)));




let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  /* your code */
  return (key != "" && value == meetup)? undefined: value;
}, 4));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/