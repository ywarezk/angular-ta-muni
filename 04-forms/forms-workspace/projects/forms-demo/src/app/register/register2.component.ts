import { Component,  } from '@angular/core';
import { FormGroup, FormControl, NgModel } from '@angular/forms';
import { repeatValidatorCreator } from '@ta/forms';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'ta-unique-username',
  template: `
    <form #registerForm="ngForm" >
      <h1>Unique username Form</h1>
      <input
        #usernameField="ngModel"
        ngModel

        type="text"
        placeholder="username..."
        name="username"
        [taUsernameUnique]="check" />
      <button>
        Login
      </button>

      {{ usernameField.errors | json }}
    </form>
  `
})

export class UniqueUsernameComponent {

  constructor(public _http: HttpClient) {

  }

  check = (username: string) => {
    return this._http.get<any>(`https://nztodo.herokuapp.com/api/task/?format=json&search=${username}`).pipe(
      map((data) => data.length === 0),
      // tap((data) => console.log(`debugging: ${data}`))
    )
  }
}
