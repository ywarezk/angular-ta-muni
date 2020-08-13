import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ta-read></ta-read>

    <ta-change></ta-change>
  `,
})
export class AppComponent {
  title = 'redux-demo';
}
