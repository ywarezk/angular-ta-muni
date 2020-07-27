import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'name-template',
  template: `
    <form #nameForm="ngForm" (ngSubmit)="printName(nameForm)" >
      <input #nameModel="ngModel" ngModel name="myName" required minlength="5" email maxlength="20"  />
      {{nameModel.errors | json}}
    </form>

  `
})

export class NameComponent implements OnInit {
  // name: string = '';
  // myForm = `
  //   <form #nameForm="ngForm" (ngSubmit)="printName(nameForm)" >
  //     <input ngModel name="myName" />
  //   </form>
  // `

  constructor() { }

  ngOnInit() { }

  printName(f: NgForm) {
    console.log(f.controls['myName'].value) // FormControl
  }
}
