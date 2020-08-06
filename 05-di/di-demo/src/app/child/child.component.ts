import { Component, OnInit, Inject, Optional, SkipSelf } from '@angular/core';
import { HelloService } from '../services/hello.service';

// AppComponent injector - hello
//     |
//  ChildComponent injector - hello

export function creator(hello: HelloService) {
  return 'bar'
}

@Component({
  selector: 'ta-child',
  template: `
    <h1>
      ChildComponent: {{helloMessage}}
    </h1>
  `,
  providers: [
    // {
    //   provide: 'hello',
    //   useValue: 'hello form ChildComponent'
    // },
    {
      provide: 'foo',
      deps: [HelloService],
      useFactory: creator
    }
  ]
})
export class ChildComponent {
  constructor(@Inject('hello') public helloMessage: string) { }
}

