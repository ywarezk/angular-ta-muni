# RXJS

```
constructor(private _http: HttpClient){}

ngOnInit() {
	this._http.get(...)
}
```

```
// callback hell
this._http.get(...).subscribe(() => {
	this._router.events.subscribe(() => {
		this.myFormControl.valueChanges.subscribe(() => {
			
		})
	})
})
```

```
this.sub = this._router.events.subscribe(() => {
	...
})

ngOnDestroy() {
	this.sub.unsubscribe();
}
```

## What is RXJS? What is Observable?

```

// producer
function myAge() {
	return 35;
}

// consumer
const age = myAge();

consumer ----> myAge

// Promise ----> then
Producer ----> consumer

// Observable
Producer ----> consumer //observable.subscribe

```

## generator functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

## Observable

---O-------O---O---X-->

## Fetch - Promise

------O---------------->
------X---------------->

## How can you create an Observable that represents an async code

- Do it yourself
- Sometimes some library will create it for us
- functions that rxjs provide us (creating operators) that created Observable


