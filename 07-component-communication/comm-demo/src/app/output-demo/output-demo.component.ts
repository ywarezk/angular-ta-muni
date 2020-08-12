/**
 * <ta-output-demo (stamEvent)="reactToEvent($event)" >
 */

import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ta-output-demo',
  template: `
    <h1>Child {{myObj.message}}</h1>
  `
})
export class OutputDemoComponent {
  @Output('stamEvent')
  somethingHappened: EventEmitter<string> = new EventEmitter()

  activateEvent() {
    this.somethingHappened.emit('hello world');
  }
}
