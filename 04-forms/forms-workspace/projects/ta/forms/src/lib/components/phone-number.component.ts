/**
 * cityObj: {city: {}, address: {}}
 * cityObj: {"id":9862,"title":"title","description":"desc","group":"45","when":"2019-09-07T18:27:32.960000Z"}
 * <form>
      052-24352354
 *   <ta-phone-number [(ngModel)]="cityObj" required taPhoneNumber  ></ta-autocomplete>
 *   <ta-phone-number [formControl]="ctrl" ><label>hello</label></ta-autocomplete>
 *   <ta-phone-number formControlName="city" ></ta-autocomplete>
 * </form>
 */

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, Host, Optional } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ControlContainer, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {fromEvent, merge} from 'rxjs';

@Component({
  selector: 'ta-phone-number',
  template: `
    <select [formControl]="prefixCtrl" [disabled]="isDisabled" (focus)="touchCb()">
      <option value="052">052</option>
      <option value="054">054</option>
    </select>
    <input type="text" [formControl]="numberCtrl" [disabled]="isDisabled" (focus)="touchCb()" />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PhoneNumberComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PhoneNumberComponent
    }
  ]
})

export class PhoneNumberComponent implements ControlValueAccessor, OnInit, Validator {
  numberCtrl = new FormControl('');
  prefixCtrl = new FormControl();

  private _changeCb;
  public touchCb;

  public isDisabled = false;

  constructor(private _http: HttpClient, @Optional() @Host() parent: ControlContainer) {}

  validate(control: AbstractControl): ValidationErrors {
    try{
      const [prefix, number] = control.value.split('-');
      const prefixRegExp = /^[0-9]{3}$/;
      const numberRegExp = /^[0-9]{7}$/;
      if (prefix.match(prefixRegExp) && number.match(numberRegExp)) return null;
    } catch(err) {}
    return {
      phoneNumber: 'invalid number'
    }
  }

  writeValue(phoneNumber: string): void {
    if (!phoneNumber) return;
    // [052, 234234]
    const [prefix, number] = phoneNumber.split('-');
    this.prefixCtrl.setValue(prefix);
    this.numberCtrl.setValue(number);
  }

  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {
    // this.numberCtrl.valueChanges.subscribe(() => {
    //   this._changeCb(`${this.prefixCtrl.value}-${this.numberCtrl.value}`)
    // });
    // this.prefixCtrl.valueChanges.subscribe(() => {
    //   this._changeCb(`${this.prefixCtrl.value}-${this.numberCtrl.value}`)
    // })

    merge(
      this.numberCtrl.valueChanges,
      this.prefixCtrl.valueChanges
    ).subscribe(() => {
      this._changeCb(`${this.prefixCtrl.value}-${this.numberCtrl.value}`)
    })
  }

}
