import { Component,  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { repeatValidatorCreator } from '@ta/forms';

@Component({
  selector: 'ta-register',
  template: `
    <form [taRepeat]="['password', 'repeat']" #registerForm="ngForm" >
      <h1>Register Form</h1>
      <input ngModel type="password" placeholder="password..." name="password" />
      <input ngModel type="password" placeholder="repeat password" name="repeat" />
      <button>
        Login
      </button>

      {{ registerForm.errors | json }}
    </form>
  `
})

export class RegisterComponent {
  registerForm = new FormGroup({
    password: new FormControl(),
    repeatPassword: new FormControl()
  }, [repeatValidatorCreator(['password', 'repeatPassword']) ])
}
