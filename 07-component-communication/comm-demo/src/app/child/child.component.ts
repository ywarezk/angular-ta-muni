import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ta-child',
  template: `
    <h1>Child {{myObj.message}}</h1>
  `
})
export class ChildComponent implements OnInit, OnChanges {
  private _myObj;

  // childComponent.myObj
  get myObj() {
    return this._myObj;
  }

  // childComponent.myObj = {message: 'new Value'}
  @Input('anotherObj')
  set myObj(value: any) {
    this._myObj = value;
    // some logic when the input is changing
  }

  // @Input('anotherObj')
  // myObj;

  @Input()
  stam;

  @Input()
  stam2;

  @Input()
  stam3;

  constructor() { }

  /**
   * how many times? many times when the input is changing
   * when? change by reference
   * some logic that should happen when my input is changing
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }

  /**
   * how many times? 1
   * When ? when initiating the component after the constructor
   * What are we suppose to do in this hook? stuff the relates to component initialization
   */
  ngOnInit() { }
}
