import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Parent</h1>
    <ta-child [anotherObj]="passToChild" ></ta-child>


    <ta-picker></ta-picker>
  `,
})
export class AppComponent implements OnInit {
  passToChild = {message: 'hello from parent'}

  ngOnInit() {
    setTimeout(() => {
      this.passToChild = { message: 'hello piglet' } // ngOnChanges
      this.passToChild['message'] = 'hello pilget' // ngOnChange not working
    }, 1000)

  }
}
