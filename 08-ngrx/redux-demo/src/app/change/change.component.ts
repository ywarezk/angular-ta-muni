import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Store } from '@ngrx/store';
import { setGreeting } from '../ngrx/actions/message.actions';

@Component({
  selector: 'ta-change',
  template: `
    <!-- <input (input)="messageService.greeting = $event.target.value" /> -->
    <!-- <input (input)="messageService.greeting$.next($event.target.value)" /> -->
    <input (input)="changeGreetingInStore($event.target.value)" />
  `
})
export class ChangeComponent{
  constructor(
    // public messageService: MessageService
    private _store: Store
  ) { }

  changeGreetingInStore(newValue: string) {
    this._store.dispatch(setGreeting({ newGreeting: newValue}));
  }
}
