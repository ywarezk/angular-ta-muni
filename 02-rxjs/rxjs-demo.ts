// RXJS

// ---O-----O----O---->
// ---K-----K----K---->

import {Observable} from 'rxjs';


// Promise VS Observable
// observable can call next multiple times
// 

let counter = 0

const helloObservable: Observable<string> = new Observable((observer) => {
	counter++;
	console.log('2 - observable function');
	observer.next('hello');
	observer.next('hi');
	observer.next('howdy');
});
// helloObservable.stam = 'hello';

console.log('1');
helloObservable.subscribe(
	(msg: string) => {
		
		console.log(msg)
	}
)
console.log('3');

helloObservable.subscribe(
	(msg: string) => {
		console.log(msg)
	}
)
console.log('4');

// Observable is lazy
// the async function will not run until subscribe
// the async function will run according to the number of subscribe