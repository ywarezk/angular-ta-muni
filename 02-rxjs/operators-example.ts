import { interval, Observable, Subject, of, from } from 'rxjs';
import { map, tap, debounceTime, catchError, multicast } from 'rxjs/operators';

// 0..1..2..3..4
// hello..hello..hello
const intervalObservable: Observable<number> = interval(1000);

// ------0--|----->
// intervalObservable.toPromise()

// from(promise)


// operator function
// creating operator => Observable

// manipulation operators
// (Observable) => Observable
// ----0-----0-----0-----0---->
// --------K-----K----------k

intervalObservable.pipe(
	catchError((err) => {
		return of([])
	}),
	map((num: number) => {
		return 'hello'
	}),
	tap((msg: string) => {
		
	}),
	catchError((err) => {
		
	})
	// debounceTime(1000)
).subscribe((msg: string) => {
	console.log(msg)
});

// 

// stamPromise
//    .catch()
//	  .then()