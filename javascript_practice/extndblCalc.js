/*jshint esversion: 8*/

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// function copySorted(arr){
//     // return arr.slice().sort((a, b) => a.localeCompare(b));
//     return arr.slice().sort();
// }
// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)



function Calculator(){
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculate = function(str){
        let arr = str.split(" ");
        let a = arr[0],
            op = arr[1],
            b = arr[2];
        return this.methods[op](a, b);
    };
    this.addMethod = function(op, method) {
        this.methods[op] = method;
    };
}
// let calc = new Calculator();

// console.log( calc.calculate("3 - 7") );
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8