import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ta-phone-number-form',
  template: `
    <form [formGroup]="phoneForm">
      <h1>Phone number</h1>
      <ta-phone-number formControlName="phoneNumber"></ta-phone-number>
    </form>

    {{ phoneForm.controls.phoneNumber.errors | json }}
  `
})
export class PhoneNumberFormComponent{
  phoneForm = this._formBuilder.group({
    phoneNumber: ''
  });

  constructor(private _formBuilder: FormBuilder) {}
}
