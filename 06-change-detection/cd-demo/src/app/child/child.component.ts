import { Component, OnInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'ta-child',
  template: `
  <h1>child component {{log()}}</h1>
  <button (click)="buttonClicked()">click</button>
  <ta-grandchild [myObj]="passToChild"></ta-grandchild>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  passToChild = {message: 'foo bar'};

  constructor(private _cd: ChangeDetectorRef) { }

  buttonClicked() {
    // this.passToChild = { message: 'Hello Piglet' };
    this.passToChild['message'] =  'hello piglet';
  }

  log() {
    // this.title = 'world'
    console.log('CD ChildComponent');
    // console.log(isDevMode());
    // return Math.random();
  }

  ngOnInit() {

    // setTimeout(() => {
    //   console.log('timer in child');
    // }, 1000);

    // setTimeout(() => {
    //   console.log('timer in child')
    //   this.passToChild = {message: 'Hello Piglet'};
    // }, 1000);
  }
}
