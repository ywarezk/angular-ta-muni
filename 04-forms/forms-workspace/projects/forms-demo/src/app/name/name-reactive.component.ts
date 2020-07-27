import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'name-reactive',
  template: `
    <form [formGroup]="nameForm" (ngSubmit)="printName()" >
      <input formControlName="myName" required email minlength="5" />
    </form>
  `
})

export class NameReactiveComponent implements OnInit {
  // name: string = '';
  nameForm: FormGroup = new FormGroup({
    myName: new FormControl('', [Validators.email, Validators.required, Validators.minLength(5)])
  });

  constructor() { }

  ngOnInit() { }

  printName() {
    console.log(this.nameForm.value) // FormGroup
  }
}
