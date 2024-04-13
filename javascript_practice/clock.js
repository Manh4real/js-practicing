"use strict";

import { padZero } from "./util.js";

/*jshint esversion: 6*/
// const text = document.querySelector('.title');

// text.addEventListener('click', function (){
//     this.classList.toggle('change');
//     this.style.marginBottom = 100 + 'px';
// });

// // Toggle nav bar
//     const toggleMenu = document.querySelector('.nav-bars');

//     toggleMenu.onclick = () => {
//         toggleMenu.classList.toggle('active');
//     };
// // Add a element to the list
//     function myFunction() {
//         var node = document.createElement('LI');
//         var textNode = document.createTextNode('adsgasdf');
//         node.appendChild(textNode);
//         document.getElementById('list').appendChild(node);
//     }

// // Change nav list element's color when clicking on it;
//     const toggleList = document.querySelectorAll('.list a');
//     for (let list of toggleList)
//     {
//         list.addEventListener('click', function () {
//             this.style.color = 'white';
//         });
//     }

// function foo(arr){
//     // let result = {value: 0, count: 0};
//     // let temp = {};
//     // for(let i = 0; i < arr.length; i++){
//     //     if(arr[i] != temp.value)
//     //     {
//     //         temp.value = arr[i];
//     //         temp.count = 0;
//     //     } else continue;

//     //     for(let j = 0; j < arr.length; j++){
//     //         if(arr[j] == temp.value){
//     //             temp.count++;
//     //         }
//     //     }

//     //     if(temp.count > result.count && temp.value != result.value)
//     //     {
//     //         result.value = temp.value;
//     //         result.count = temp.count;
//     //     }
//     // }
//     // console.log(`${result.value} shows up most with ${result.count} times`);

//     let result = 0, count = 0,
//         temp, count_temp;
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i] != temp)
//         {
//             temp = arr[i];
//             count_temp = 0;
//         } else continue;

//         for(let j = i; j < arr.length; j++){
//             if(arr[j] == temp)
//             {
//                 count_temp++;
//             }
//         }

//         if(count_temp > count)
//         {
//             [result, count] = [temp, count_temp];
//         }
//     }
//     console.log(`${result} shows up most with ${count} times`);
// }
// foo([1, 3, 24, 25, 25, 25, 2, 15, 1]);

// function foo(str){
//     let ucCount = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 97)
//         {
//             ++ucCount;
//             if(ucCount >= Math.ceil(str.length / 2))
//             {
//                 console.log(str.toUpperCase());
//                 return;
//             }
//         }
//     }
//     console.log(str.toLowerCase());
//     return;
// }

// foo("NGYUenVanMa");

// function foo(str, target)
// {
//     let temp = target;
//     // return Array.from(temp).sort().join("") == Array.from(str).sort().join("");
//     return [...str].sort().join("") == [...target].sort().join("");
// }
// console.log(foo("hnadm", "manh"));

// function foo(...arr){
//     return arr[0].some((val) =>  arr[1].includes(val));
// }
// console.log(foo([1, 2, 3], [4, 5, 6, 2]));

let main = document.createElement("div");
main.className = "main";
document.body.prepend(main);

let WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// CALENDAR of a specific year's month
function createCalendar(containerEl, year, month, day) {
  let table = document.createElement("table");
  table.classList.add("shadow");
  containerEl.append(table);

  const monthInfo = getMonthInfo(year, month);

  initEmptyRows(table, monthInfo);
  initCalendarDayValues(table, monthInfo);
  styleCells(table, day);
}

let date = new Date();
createCalendar(main, date.getFullYear(), date.getMonth() + 2, date.getDate());
initCalendarHeader(main);

clock();

// run CLOCK
function clock() {
  let div = document.createElement("div");
  div.id = "clock";
  div.classList.add("shadow");
  main.append(div);

  function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `
        ${padZero(hours)}<span>h</span><span>:</span>
        ${padZero(minutes)}<span>m</span><span>:</span>
        ${padZero(seconds)}<span>s</span>
    `;
  }
  div.innerHTML = getTime();

  setInterval(() => {
    div.innerHTML = getTime();
  }, 1000);
}

function initCalendarHeader(containerEl) {
  // INSERT with MM/YY
  containerEl.insertAdjacentHTML(
    "afterbegin",
    `<div>
        <h2>${date.toUTCString().split(" ").slice(2, 4).join(" ")}</h2>
    </div>`
  );
}

function initEmptyRows(tableEl, { weekCount }) {
  for (let i = 0; i < weekCount + 1; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i == 0) {
        // create head row (title row)
        let head = document.createElement("th");
        head.textContent = WEEKDAYS[j];
        row.append(head);
        continue;
      }
      let cell = document.createElement("td");
      row.append(cell);
    }
    tableEl.append(row);
  }
}

function initCalendarDayValues(tableEl, monthInfo) {
  const { weekCount, monthFirstDay, monthLastDay } = monthInfo;

  let d = 0;
  for (let i = 1; i < weekCount + 1; i++) {
    for (let j = 0; j < 7; j++) {
      // to skip cells in front of first day of the month.
      if (j < monthFirstDay && i == 1) continue;
      // start setting values from here
      else if (d < monthLastDay) tableEl.rows[i].cells[j].innerHTML = ++d; // till d = day (notice the "++d")
    }
  }
}

function styleCells(tableEl, today) {
  let cells = tableEl.getElementsByTagName("td");
  for (let cell of cells) {
    if (cell.innerHTML == today) {
      cell.style.background = "#eee";
      cell.style.borderRadius = "22px";
      cell.style.border = "2px solid #000";
    }
  }
}

function getMonthInfo(year, month) {
  let monthFirstDay = new Date(year, month - 1).getDay(); // first day of the current month
  monthFirstDay = monthFirstDay == 0 ? 6 : monthFirstDay - 1;

  let monthLastDay = new Date(year, month, 0).getDate(); // get the last day of the current month (trick)
  let weekCount = Math.ceil(monthLastDay / 7) + 1;

  return {
    monthFirstDay,
    monthLastDay,
    weekCount,
  };
}
