import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ta-stam',
  template: `
    <h1>
      hello im stam component and im lazy loaded {{helloMessage}}
    </h1>
  `
})
export class StamComponent{
  constructor(@Inject('hello') public helloMessage: string) {}
}
