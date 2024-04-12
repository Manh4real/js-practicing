/*jshint esversion: 6*/

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//   	let a = i++;
//     let shooter = () => { // create a shooter function,
//       console.log( a ); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//   }

//   // ...and return the array of shooters
//   return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.




// function f(...arg) {
//   arg.forEach((val) => console.log(val));
// }

// function delay(f, ms){
//   return function (...args){
//       setTimeout(() => {
//           f.call(this, ...args);
//       }, ms);
//   };
// }
// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test", "test2"); // shows "test" after 1000ms
// f1500("test", "test2"); // shows "test" after 1500ms

(function(){"use strict";})();
function f(a){
  console.log(a);
}
function throttle(f, max){
  let isThottled = false;
  let saveThis, saveArgs;
  function foo(){
    if(isThottled){
      saveThis = this;
      saveArgs = arguments;
      return;
    }
    isThottled = true;
    f.apply(this, arguments);

    setTimeout(() => {
      isThottled = false;
      if(saveArgs) {
          foo.apply(saveThis, saveArgs);
          saveArgs = saveThis = null;
      }
    }, max);
  }
  return foo;
}
// let f1000 = throttle(f, 1000);
// f1000(1); // shows 1
// f1000(2); // throttling, 1000s not out yet...
// f1000(3);
// setTimeout(() => {
//   f1000(4);
// }, 2000);
// f1000(10); // 1000ms time out... out puts 10, value 2, 3, 4, ...was ignored


let user1 = {
  name: "john",
  getName(phrase, foo){
    console.log("hello " + phrase + this.name + foo);
  }
};
user1.getName.test = 5;
user1.getName.toString = function (){
  return "this is string";
};
let bound = user1.getName.bind(user1);
// bound(" morning ", " ??? ");
let descriptor = Object.getOwnPropertyDescriptor(user1, "name");
// console.log(JSON.stringify(descriptor, null, 2));
Object.defineProperty(user1, "name", {writable: false,configurable: false});
// user1.name = "can't be  re-assigned";// Error: Cannot assigned to a readable 
// console.log(user1.name);
// Object.defineProperty(user1, "name", {value: "Can't be changed"});

Object.preventExtensions(user1); 
// forbids adding of new properties to the object
// Error: can not add property, user1 is not extensible
// user1.mul = function(){
//   return 1;
// }

Object.seal(user1);
 // forbids adding/ removing of property
// sets "configurable: false"
// delete user1.getName; // Error: Cannot delete property 'getName' of #<Object>

Object.freeze(user1);
 // Forbids adding/ removing/ changing of properties.
// sets "configurable: false, writable: false"

Object.isExtensible(user1);//true if allowing to add                properties
Object.isSealed(user1); // true if forbidding to add/ remove        properties
Object.isFrozen(user1); // true if forbidding to add/ remove/ change properties
