/**
 * <input (throttling)="search($event)" />
 * $event is string
 */

import { Directive, Output, EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Directive({
  selector: '[throttling]'
})
export class ThrottlingDirective implements OnInit, OnDestroy {
  @Output('throttling')
  throttling: EventEmitter<string> = new EventEmitter()

  private _sub: Subscription;

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    // ---E--E--E---E--E--->
    // ----------------E--->
    // ----------------S--->

    this._sub = fromEvent<any>(this._element.nativeElement, 'input').pipe(
      debounceTime(1000),
      map((event) => event.target.value)
    ).subscribe(this.throttling);
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
