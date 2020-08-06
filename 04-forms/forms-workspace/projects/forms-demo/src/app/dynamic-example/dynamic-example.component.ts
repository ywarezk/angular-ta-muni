import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ta-dynamic-example',
  template: `
    <form [formGroup]="nameForm" (ngSubmit)="printToConsole()">
      <h1>Dynamic Form</h1>
      <input type="text" formControlName="name" />
      <input type="text" formControlName="lastName" *ngIf="nameForm.controls.lastName" />
      <button (click)="addLastName()">add last name</button>

      <div formArrayName="addresses">
        <ng-container *ngFor="let control of $any(nameForm.controls.addresses).controls; index as i">
          <input type="text" [formControlName]="i" />
        </ng-container>
        <button (click)="addAddress()">add address</button>
      </div>
    </form>
  `
})
export class DynamicExampleComponent {
  nameForm = this._formBuilder.group({
    name: 'Yariv',
    addresses: this._formBuilder.array([
      this._formBuilder.control('')
    ])
  });

  addLastName() {
    // this.nameForm.addControl('lastName', this._formBuilder.control('Katz'))
    this.nameForm.addControl('lastName', new FormControl('Katz'));
  }

  addAddress() {
    (this.nameForm.controls.addresses as FormArray).push(new FormControl());
  }

  printToConsole() {
    console.log(this.nameForm.value);
  }

  constructor(private _formBuilder: FormBuilder) { }
}
