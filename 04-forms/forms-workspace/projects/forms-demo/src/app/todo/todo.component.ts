import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'ta-todo',
  template: `
    <h1>Todo list</h1>
    <ul>
      <li *ngFor="let task of tasks$ | async">
        <h1>{{task.title}}</h1>
        <p>{{task.description}}</p>
      </li>
    </ul>
    <button (click)="fetch()">fetch list</button>
  `
})
export class TodoComponent {
  tasks$: Observable<any>

  constructor(
    private _http: HttpClient
  ) { }

  fetch() {
    this.tasks$ = this._http.get('https://academeez-login-ex.herokuapp.com/api/tasks');
  }
}
