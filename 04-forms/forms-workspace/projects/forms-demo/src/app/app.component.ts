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

    <ta-phone-number-form></ta-phone-number-form>

    <ta-login></ta-login>

    <ta-todo></ta-todo>

    <ta-upload-form></ta-upload-form>

    <ta-dynamic-example></ta-dynamic-example>
  `,
})
export class AppComponent {
  title = 'forms-demo';
}
