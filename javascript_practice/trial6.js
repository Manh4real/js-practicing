/*jshint esversion: 9*/
(function () {
  "use strict";
})();

// Function.prototype.defer = function(ms){
//     let f = this;
//     return function (...args) {
//       setTimeout(() => f.apply(this, args), ms);
//     };
// };

// let user = {
//   name: "John",
//   age: 30,
//   getName(){
//     console.log(this.name);
//   },
//   getAge(){
//     console.log(this.age);
//   },
//   sum(a, b, c){
//     console.log(a + b + c);
//   }
// };
// user.getAge = user.getAge.defer(1000);
// user.getAge();
// user.sum.defer(2000)(2, 3, 5);
// user.getName = user.getName.defer(3000);
// user.getName();

// class User{
//   constructor(){
//     this.name = "user";
//   }
//   walk (){
//     console.log(`${this.name} is walking !!!`);
//   }
// }
// class Customer extends User{
//   constructor(){
//     super();
//     this.name = "customer";
//   }
//   walk(){
//     super.walk();
//   }
// }
// class Vip extends Customer{
//   constructor(){
//     super();
//     this.name = "vip customer";
//   }
// }
// let customer = new Customer();
// // customer.walk();

// let vip = new Vip();
// // vip.walk();
// // console.log(Customer.__proto__ == User);
// // console.log(Customer.prototype.constructor == Customer);

// function foo(){

//   try{
//     blabla;
//   } catch(err){
//     if(err instanceof SyntaxError)
//       throw err;
//     throw new Error(err);
//   }
// }

// try{
//   foo();
// } catch(err){
//   console.log("Catch ya",err.name, err.message);
// } finally{
//   console.log("Finally...");
// }

// console.log("Continue executing...."); // no more executing when "return"
// // in try...catch block (in the same scope)

// async function foo (){
//     blabla;
//   }

//   window.addEventListener("unhandledrejection", (err) => {
//     console.log(err.message);
//   });

// let arr = [1, 2, 3, 4, 5];

// arr = new Proxy(arr, {
//   get(target, key){
//     if(key in target) return target[key];
//     else return "No such value";
//   },
//   set(target, key, val){
//     if(typeof val == "number")
//     {
//       target[key] = val;
//       return true;
//     } else return false;
//   }
// });
// console.log(arr[0]); // 1
// console.log(arr[199]); // No such value
//  arr.push(2);
//  console.log(arr.length); // 6
//  // arr.push("Hi"); // error
//  arr[6] = "abc"; // no error but still not adding new values.
// console.log(arr.length); // 6

// function foo(num){
//   let temptNum = num;
//   let arr = []; // store digits

//   while(temptNum > 0){
//     arr.push(temptNum % 10);
//     temptNum = Math.floor(temptNum / 10);
//   }
//   arr.reverse();
//   let a = []; // store numbers after removing 1 digit

//   for(let i = 0; i < arr.length; i++){
//     let n = +arr.filter((_, index) => index != i).join("");
//     a.push(n);
//   }
//   return Math.max(...a.sort());
// }
// console.log(foo(109483));

//====== count times to turn a number with the sum of its digits
// till into single digit number.

// function foo(num){
//   function digits(n){
//     let arr = []; // store digits
//     let temp = n;

//     while(temp){
//       arr.push(temp % 10);
//       temp = Math.floor(temp / 10);
//     }
//     return arr.reverse();
//   }

//   let arr = digits(num);
//   let count = 0;
//   while(1){
//     temp = arr.reduce((s, v) => s + v, 0);
//       ++count;
//     console.log(`step ${count}: we get ${temp}`);

//     if(Math.floor(temp / 10)) arr = digits(temp);
//     else break;
//   }
//   console.log("After "+count+" times, we got "+temp+".");
// }
// foo(98345);

//======pairs of 2 numbers from given array, be divisible by another.

// function isDivisible(a, b){
//   return a > b? (a % b === 0): (b % a === 0);
// }
// function foo(arr){
//   let count = 0;
//   for(let i = 0; i < arr.length - 1; i++)
//     for(let j = i + 1; j < arr.length; j++)
//       if(isDivisible(arr[i], arr[j])) {
//         ++count;
//         // console.log(arr[i], arr[j]);
//       }

//   console.log(count);
// }
// foo([1, 2, 4, 16]); // 2,1 - 4,2 - 4,1 - 16,4 - 16,1 - 16,2.
// foo( [2, 4, 6]); // 2
// foo([2, 4, 16]); // 3

// =====USE REGULAR EXPRESSION MORE!!!!
// checks for the corrent sentence.
// function foo(str){
//   return str.endsWith(".") && /[A-Z]/.test(str.substr(0, 1));
// }
// console.log(foo("nguyen van manh")); // false
// console.log(foo("Nguyen manh.")); // true

// function reverseChar(str){
//   let lc = lowerCase();

//   function lowerCase(){
//     let str = '';
//     for(let i = 97; i <= 122; i++){
//       str += String.fromCharCode(i);
//     }
//     return str;
//   }

//   let temp = '';
//   for(let i = 0; i < str.length; i++){
//     let t = lc.indexOf(str[i]);
//     if( t !== -1)
//     {
//       temp += lc[lc.length - t - 1];
//     } else {
//       temp += str[i];
//     }
//   }
//   console.log(temp);
// }
// reverseChar('%abc$zyx*mno'); // %zyx$abc*nml

// // ==== remove all characters appear more than once
// function foo(str){
//   let i = 0;
//   while(i <= str.length){
//    if(str.includes(str[i], i + 1)){
//       let rgExp = new RegExp(str[i], "gi");
//       str = str.replace(rgExp, "");
//       --i;
//    }
//     i++;
//   }
//   console.log(str);
// }
// foo("Nguyen van manh"); // "guyen v mh"
// foo("abcdabc"); // "d"
// foo("abcabc"); // " "
// foo("dslakfj;alsjf;etoiewhptohqewolj;dsf"); // "kipq"
// foo("abb"); // "a"

// // ==== replace first digit by "$"
// function foo(str){
//   str = str.replace(/[0-9]/, "$");
//   console.log(str);
// }
// foo("manh4 r36eal"); // manh$ r36eal
// foo("manh"); // manh

// // ===== check whether all digits be the same.
// function foo(num){
//   let d = num % 10;
//   while(num){
//     if (num % 10 !== d)
//     {
//       return false;
//     }
//     num = Math.floor(num / 10);
//   }
//   return true;
// }
// console.log(foo(123456)); // false
// console.log(foo(777777)); // true

//===== find the mutual values
// function foo(...arrs){
//   let temp = [];

//   arrs[0].forEach(val => {
//     if(arrs[1].includes(val) && !temp.includes(val))
//     {
//       temp.push(val);
//     }
//   });
//   return temp.length? temp : "None";
// }
// console.log(foo([ 3, 4, 4, 4], [5, 6, 7, 4])); // [4]
// console.log(foo([4, 5, 6], [1, 2, 3])); // "none"

// function foo(arr){
//   // for(let i = 0; i < arr.length; i++)
//   //   for(let j = 0; j < arr.length - 1; j++)
//   //     if(arr[j].length > arr[j + 1].length)
//   //     {
//   //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//   //     }

//   // OR

//   arr.sort((str1, str2) => str1.length - str2.length);
//     console.log(arr);
// }
// foo(["abc", "ab", "abcd", "a", "abcde", 'a']);
// foo(["xyz","acd","aa","bb","zzz","", "a","b"]);

// ===== CUSTOM EVENT
let closeBtn = document.querySelector(".fas.fa-times");
let menuBtn = document.querySelector(".fas.fa-bars");
let menu = document.getElementById("list");
let hello = document.getElementById("h1-hello");
// function hide(){
//   let closeEvent = new CustomEvent("close", {cancelable: true});

//   if(!closeBtn.dispatchEvent(closeEvent)){
//     if(menu.hidden) alert("menu been closed");
//     else menu.hidden = true;
//   } else alert("a'ight");
// }
menu.addEventListener("click", (e) => {
  if (!e.target.closest("li")) return;
  // hello.innerHTML = e.target.dataset.title;
  hello.innerHTML = e.target.textContent;
  if (e.ctrlKey || e.metaKey) e.target.classList.toggle("isSelected");
  else {
    let links = menu.querySelectorAll(".isSelected");
    for (let link of links) {
      link.classList.remove("isSelected");
    }
    e.target.classList.add("isSelected");
  }
  e.preventDefault();
});
menu.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

menuBtn.onclick = function () {
  if (!menu.hidden) return;
  menu.hidden = false;
  menu.style.display = "";
  closeBtn.classList.remove("active");
  menuBtn.classList.add("active");
};
closeBtn.addEventListener("close", (e) => {
  console.log(e.detail.name, e.detail.description);
  if (confirm("you ain't trippin', right ??")) e.preventDefault();
});
closeBtn.onclick = function () {
  let closeEvent = new CustomEvent("close", {
    cancelable: true,
    detail: {
      name: "close event",
      description: "has been fired!!",
    },
  });

  if (!closeBtn.dispatchEvent(closeEvent)) {
    menu.hidden || menu.style.display == "none"
      ? alert("menu been closed")
      : (menu.hidden = true),
      (menu.style.display = "none"),
      closeBtn.classList.add("active"),
      menuBtn.classList.remove("active");
  } else alert("a'ight");
};

for (let btn of document.querySelectorAll(".fas")) {
  if (btn.classList.values("active")) btn.style.display = "";
  else btn.style.display = "none";
}
