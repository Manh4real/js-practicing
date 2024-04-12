/*jshint esversion: 6*/

// // This is my firt JavaScript code!
// console.log('hello world');

// let Name = 'Manh';
// console.log(Name);
// let firstName = 'Nguyen';
// let middleName = 'Van';

// console.log("I am " + firstName + " " + middleName + " " + Name);
// console.log(`I am ${firstName} ${middleName} ${Name}`); // another way
// const interestRate = 0.3;
// console.log(interestRate);

// OBJECT

// let person = {
//     name: 'Manh',
//     age: 20,
//     accessories: ['phone', 'laptop', 'headphone'],
//     sayMyName: function () {
//         console.log(`My name is ${this.name}. It's nice to meet you`);
//     }
// }
// console.log(person.accessories[1]);
// person.sayMyName();

// let selection = 'name';
// person.name = 'Nguyen Van Manh';
// person['name'] = 'Manh for real';

// console.log(person);
// console.log(person.name + " " + person.age);
// console.log(person['name']);
// console.log(person[selection]);

// ARRAY

// let selectedColors = ['red', 'blue'];
// selectedColors.push(); // add an element in the last position;
// selectedColors.pop(); // remove an element in the last position;
// selectedColors.shift(); // add an element in the first position;
// selectedColors.unshift(); // remove an element in the first position;

// selectedColors.indexOf('red') // return a number (the 'red' position);

// selectedColors[2] = 2;

// console.log(selectedColors);
// console.log(selectedColors[1]);

// FUNCTION

// function getName(name, personality) {
//     console.log(`Hello this is ${name}, I am ${personality}`);
// }
// getName('Manh', 'a good guy');

//STRING object and primitive
// const message = '   this is my first message   '; //string primitive

// const name = new String('hello'); // string object
// IF ... ELSE

// let age = 48;
// if (age >= 0 && age < 18)
//     console.log('There is a child');
// else if (age === 18)
//     console.log('There is a middle child');
// else if (age > 18 && age <= 25)
//     console.log('There is a boy');
// else if (age >= 26 && age <= 45)
//     console.log('There is a man');
// else if (age >= 46)
//     console.log('There is a old man');
// else console.log('Check the age!!');

// const a = [1, 3, 0, - 1, 93];

// // for (name of a) {
// //     console.log(name);
// // }

// function searchMax(a) {
//     for (let index = 0; index < a.length; index++) {
//         var max = a[0];
//         for (let index1 = 0; index1 < a.length; index1++)
//             if (max < a[index1])
//                 max = a[index1];
//     }
//     return max;
// }
// console.log(`The maximum value in the array: ` + searchMax(a));

// var s = ['Manh', 'Nguyen', 'Van'];
// function findM(s){
//     for (word of s) {
//         if (word == 'Manh')
//             return true;
//     }
//     return false;
// }
// console.log(findM(s) ? `we found it, "Manh" is on the array` : `We can't found 'Manh'`);

// var x = 100;
// x = x - 88;
// console.log(x);

// prompt('enter passcode: ');
// let number = Number(prompt('Pick a number'));

// console.log(`the number you pick is ${number}`);

// console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

// ==== MAP ====

//let newMap = new Map();

// newMap.set('name', 'Manh');
// newMap.set('age', 14);
// for ([keyName, returnedValue] of newMap) {
//     console.log(keyName + ' is ' + returnedValue);
// }
// for (let pair of newMap) {
//     console.log(pair);
// }

// let obj = {
//     name: "manh",
//     age: 14
// }
// for (key of newMap) {
//         console.log(key);
// }
// for (key of newMap.keys()) {
//         console.log('This is newMap key: ' + key);
// }
// for (value of newMap.values()) {
//         console.log("This is value's newMap: " + value);
// }
// for (entry of newMap.entries()) {
//         console.log(entry);
// }

// newMap.forEach((value, key) => {
//         console.log(`This is value and key: ${value} -- ${key}`);
// })

// =====
// let key_valuePairs = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
// let newMap = new Map(key_valuePairs);

// console.log(newMap.get('key1'));
// console.log(newMap.get('key2'));

// console.log(Array.from(newMap)); /* or*/console.log([...newMap]);
// console.log(Array.from(newMap.values()));
// ====
// let original = new Map([['name', 'Manh'], ['age', 14]]);

// let clone = new Map(original);
// console.log(clone.get('age'));

// console.log(original === clone);

// =====

// let first = new Map([['name1', 'age1'], ['name2', 'age2'], ['name3', 'age3']]);

// let second = new Map([['foo1', 'oof1'], ['foo2', 'oof2'], ['foo3', 'oof3']]);

// let merge = new Map([...first, ...second, ['anotherOne', 'stopFuckingWitMe']]);
// console.log(merge.get('anotherOne'));
// console.log(merge.size);
//console.log(merge.keys());
//====

// let obj = {
//         age: 14,
//         firstName: 'Manh',
//         surname: 'Van',
//         lastname: 'Nguyen',
//         toJSON(value) {
//                 if (typeof value === 'number')
//                         return 'Hey I am a number!!';
//                 return this;
//         }
// };
// console.log(obj.keys());

//==== GENERATOR ====

// function* myGenerator(n) {
//     for (let index = n; ; index *= 2) {
//         yield index;
//         if (index >= 100) return index;
//     }
// }
// let x = myGenerator(2);

// // just log the value out.
// for (let value of x) {
//     console.log(value);
// }

// // Log the object {value, done} out.
// console.log(x.next()); // 2, false
// console.log(x.next()); // 4, false
// console.log(x.next()); // 8, false
// console.log(x.next()); // 16, false
// console.log(x.next()); // 32, false
// console.log(x.next()); // 64, false
// console.log(x.next()); // 128, false
// console.log(x.next()); // 128, true
// console.log(x.next()); // undefined, true

// function* anotherGenerator(i) {
//     yield i;
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;

// }
// function* myGenerator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 100;
//     console.log(yield);
// }
// let x = myGenerator(1);
// console.log(x.next()); // 1, false
// console.log(x.next()); // 1, false
// console.log(x.next()); // 2, false
// console.log(x.next()); // 3, false
// console.log(x.next()); // 4, false
// console.log(x.next()); // 101, false
// console.log(x.next()); // undefiend, false
// x.next('i am manh'); // i am manh

// function* myGenerator() {
//     console.log(0);
//     console.log(yield);
//     console.log(2, yield);
//     console.log('3', yield);
// }
// let x = myGenerator();
// x.next();
// x.next('nguyen');
// x.next('van');
// x.next('manh');

// const obj = {
//     *myGenerator() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// };
// let x = obj.myGenerator();
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())

// class Foo {
//     *[Symbol.iterator]() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }
// const obj = {
//     *myGenerator() {
//         yield 4;
//         yield 5;
//         yield 6;
//     }
// }
// console.log(Array.from(new Foo));
// let boo = new Foo();
// for (value of boo)
//     console.log(value);

// for (value of obj.myGenerator()) {
//     console.log(value);
// }

// const foo = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// };
// let boo = foo();
// console.log(boo.next());
// console.log(boo.next());
// console.log(boo.next());
// console.log(boo.next());

// console.log("hello world ");

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

// DOM Object style

function createTree(container, data) {
  let count = 0;

  function foo(data) {
    if (!Object.keys(data).length) {
      return;
    }

    let ul = document.createElement("ul");
    for (let item in data) {
      let li = document.createElement("li");
      li.innerHTML = item;
      let childUl = foo(data[item]);

      if (childUl) {
        // count += childUl.children.length;
        count = childUl.getElementsByTagName("li").length;
        li.append(` [${count}]`, childUl);
      }
      ul.append(li);
    }
    return ul;
  }

  container.append(foo(data));
}

// innerHTML style

// function createTree(container, data) {
//   function foo(dt) {
//     let ul;
//     let li = "";
//     for (let item in dt) {
//       li += "<li>" + item + foo(dt[item]) + "</li>";
//     }
//     if (li) ul = "<ul>" + li + "</ul>";
//     return ul || "";
//   }
//   container.innerHTML = foo(data);
// }
createTree(document.body, data); // creates the tree in the container
