import { Component, OnInit, Directive } from '@angular/core';

// @Directive({
//   exportAs: 'ngModel'
// })
// ...

@Component({
  selector: 'ta-trv',
  template: `
    <p>{{myH1.id}}</p>
    <h1 id="hello" #myH1>hello trv</h1>
    <ta-child #childInstance ></ta-child>
    <input ngModel #myInput="ngModel"  />
  `,
  exportAs: 'stamTrv'
})
export class TrvComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
