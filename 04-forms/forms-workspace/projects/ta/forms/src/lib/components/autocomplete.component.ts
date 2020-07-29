/**
 * cityObj: {city: {}, address: {}}
 * cityObj: {"id":9862,"title":"title","description":"desc","group":"45","when":"2019-09-07T18:27:32.960000Z"}
 * <ta-autocomplete [(ngModel)]="cityObj" ></ta-autocomplete>
 * <ta-autocomplete [formControl]="ctrl" ><label>hello</label></ta-autocomplete>
 * <ta-autocomplete formControlName="city" ></ta-autocomplete>
 */

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'ta-autocomplete',
  template: `
    <input type="search" #searchInput />
    <ul>
      <li>
      </li>
    </ul>
  `
})

export class AutocompleteComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('searchInput', {read: ElementRef})
  searchInput: ElementRef;

  constructor(private _http: HttpClient) {}

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }

  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }

  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input').pipe(

    )
  }
}
