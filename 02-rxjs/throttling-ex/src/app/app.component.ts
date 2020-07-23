import { Component } from '@angular/core';
import { SearchService } from './services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-5">
          <h1>
            Throttling Demo
          </h1>

          <p>
            Typing a text in the following text box with send a throttled search request to our server
          </p>

          <form class="mt-5">
            <div class="form-group">
              <input
                type="search"
                class="form-control"
                placeholder="Search..."
                (throttling)="search($event)" />
            </div>
          </form>

          <ul class="list-group mt-5">
            <li class="list-group-item" *ngFor="let item of list$ | async">
              <h1>{{item.title}}</h1>
              <p>{{item.description}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  list$: Observable<any>;

  constructor(private _searchService: SearchService) {}

  search(searchStr: string) {
    this.list$ = this._searchService.search(searchStr)
  }
}
