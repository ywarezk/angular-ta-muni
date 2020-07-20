import { Component } from '@angular/core';

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
              <input type="search" class="form-control" placeholder="Search..." />
            </div>
          </form>

          <ul class="list-group mt-5">
            <li class="list-group-item">
              <h1>Populate from server - title</h1>
              <p>Description</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
}
