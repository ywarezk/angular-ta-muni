import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Forms Demo
    </h1>
    <name-template></name-template>
    <name-reactive></name-reactive>

    <ta-register></ta-register>

    <ta-unique-username></ta-unique-username>
  `,
})
export class AppComponent {
  title = 'forms-demo';
}
