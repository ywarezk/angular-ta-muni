// Observable

// observable that wraps setInterval

import { Observable, Subscription } from 'rxjs';

const intervalIbservable: Observable<string> = new Observable((observer) => {
	let counter = 0
	setInterval(() => {
		observer.next('hello world');
		counter++;
		if (counter > 3) {
			observer.complete();
		}
	}, 1000);
	
	// observer.complete();
	// observer.error(new Error())
});

const sub: Subscription = intervalIbservable.subscribe(
	(msg: string) => {
		console.log(msg);
	},
	(err) => {
		console.log('error');
	},
	() => {
		console.log('complete');
	}
);

intervalIbservable.subscribe((msg: string) => {
	console.log(msg);
});

// Observable is lazy
// observable will run for every subscriber

// Promise VS Observable

// promise run the async method once for all the listeners

// ---0---0---0---0---|-->

// detach a listener
sub.unsubscribe();

// ngOnDestroy() {
// 	this.sub.unsubscribe()
// }


// observable is cancelable
// Promise not cancelable