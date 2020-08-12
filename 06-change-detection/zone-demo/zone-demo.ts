import 'zone.js';

// how to run things with node
// 1. open new directory
// 2. npm init --yes
// 3. npm install zone.js ts-node
// 4. npm install typescript -D
// 5. npx ts-node zone-demo.ts

// angular is using zone.js to know when async stuff happens
// setTimeout

console.log(Zone.current.name);

const angularZone = Zone.current.fork({
	name: 'angular',
	onHasTask: () => {
		// i can ignite change detection if the async stuff has returned 	
		console.log('activate cd when the timer is returned');
	}
});

angularZone.run(() => {
	setTimeout(() => {
		console.log('timer');
	}, 1000)
})

// angular will wrap the usage of zone.js with the service NgZone
