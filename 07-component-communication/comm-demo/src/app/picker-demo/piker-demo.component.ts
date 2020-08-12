import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-picker',
  template: `
    <input matInput [matDatepicker]="picker">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  `
})
export class PickerDemoComponent {
}
