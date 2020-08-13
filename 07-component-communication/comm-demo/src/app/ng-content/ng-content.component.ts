/**
 *
 <ta-ng-content>
  <h1 class="modal-header " #title>
    <span>

    </span>
  </h1>
  <h2 class="modal-header">
   safadsf
  </h2>

  <div class="modal-body">

  </div>
  <ng-template>
  </ng-template>
 </ta-ng-content>
 */

import { Component, OnInit, ContentChild, ElementRef, TemplateRef, AfterContentInit, AfterContentChecked } from '@angular/core';
// import { Route, ActivatedRoute } from '@angular/router';

// /user/alex
// /user/stas
// {
//   path: 'user/:stasOrAlex'
// }

@Component({
  selector: 'ta-ng-content',
  template: `
    <div>
      <button>close</button>

      <!-- title -->
      <ng-content select=".modal-header"></ng-content>

      <!-- body -->
      <ng-content select=".modal-body"></ng-content>

      <!-- footer -->
      <ng-content select=".modal-footer"></ng-content>
    </div>
  `
})
export class NgContentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild('title')
  titleFromParent: ElementRef

  @ContentChild(TemplateRef)
  someTemplate: ElementRef


  constructor() { }

  ngOnInit() { }

  /**
   * jumps once
   * do something after content projection initiated
   */
  ngAfterContentInit(){

  }

  /**
   * jumps every change detection
   * do some logic when content project is changing
   */
  ngAfterContentChecked() {

  }
}
