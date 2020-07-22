// Subject

// ----0-----0----0---->

// observable wrapped async function, subject do not wrap async function
// Observable duplicates for every listener, subject we have one data stream
// events one data stream for all the listeners

import {Subject, BehaviorSubject} from 'rxjs';


const helloSubject: Subject<string> = new Subject();

helloSubject.next('hello world');
helloSubject.next('hello world');
helloSubject.next('hello world');

helloSubject.subscribe((msg: string) => {
	
})

helloSubject.next('hello world+++');

helloSubject.asObservable()