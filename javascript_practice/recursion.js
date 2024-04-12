/*jshint esversion: 6*/


// function fib(n){
// 	return (n == 1 || n == 2) ? 1 : (fib(n - 1) + fib(n - 2));
// }
// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// // console.log(fib(70)); // 5527939700884757

// function fib(n){
// 	let a = 1;
// 	let b = 1;
// 	for (let i = 3; i <= n ; i++)
// 	{
// 		let c = a + b;
// 		a = b;
// 		b = c;
// 	}
// 	return b;
// }

// console.log(fib(77)); // 5527939700884757




let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList_Loop(list){
	let i = list;
	while(i){
		console.log(i.value);
		i = i.next;
	}
}
function printList_Recursive(list){
	if(list == null) return;
	else {
		console.log(list.value);
		printList_Recursive(list.next);
	}
}
function printList_Loop_Reverse(list){
	
	/*like old one*/
}
function printList_Recursive_Reverse(list){
	if(!list) return;
	printList_Recursive_Reverse(list.next);
	console.log(list.value);
}
// printList_Loop(list);
// printList_Recursive(list);
// printList_Loop_Reverse(list);
printList_Recursive_Reverse(list);