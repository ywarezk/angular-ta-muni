/**
 * https://academeez-login-ex.herokuapp.com/api/users/login
 * POST: {email: 'yariv@nerdeez.com', password: '12345678'}
 *

 * https://academeez-login-ex.herokuapp.com/api/tasks

 * Authorization: Bearer <token>
 * the server will send a JWT token
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ta-login',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <h1> Login Example </h1>
      <input
        formControlName="email"
        type="email"
        required
        email />
      <input
        formControlName="password"
        required
        minlength="3"
        type="password" />
      <button>Submit</button>
    </form>
  `
})
export class LoginComponent {
  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ''
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient
  ) {}

  /**
   * send the request to our server
   */
  login() {
    this._http.post(
      'https://academeez-login-ex.herokuapp.com/api/users/login',
      {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }
    ).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
    })
  }
}
