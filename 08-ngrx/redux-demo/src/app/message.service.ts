import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessageService {


  // greeting = 'hello world'
  greeting$ = new BehaviorSubject('hello world')

}

/**
{
  message: {
    greeting: 'hello world'
  },

  user: {
    ...
  },

  todo: {

  }
}

 */
