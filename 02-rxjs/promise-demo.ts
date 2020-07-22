// Promise

// ------O----------->

const helloPromise: Promise<string> = new Promise((resolve, reject) => {
	resolve('hello world');
	//  resolve('') Promise resolved once
	// reject(new Error('something happened'));
});

helloPromise.then(
	(msg: string) => {
		console.log(msg);
	},
	(err: Error) => {
		console.log(err.message);
	}
);