import { Component, OnInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, ComponentRef, Input } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'ta-grandchild',
  template: `
  <h1>Grand component {{log()}} {{title}} {{myInterval$ | async}}</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent implements OnInit  {
  title = 'hello'

  myInterval$: Observable<number>;

  @Input()
  myObj = {message: 'hello world'}

  log() {
    console.log('CD GrandChild');
  }

  constructor(private _cd: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      console.log('timer in grandchild');
      this.title = 'world';
      // this._cd.detectChanges();
      // this._cd.markForCheck();
    }, 1000);

    // // Observable / Promise
    // Promise.resolve('hello').then(() => {
    //   console.log('promise is running');
    // });

    // will not trigger change detection
    // httpClient.get().subscribe(...)

    this.myInterval$ = interval(1000);
  }
}
