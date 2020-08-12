import { Component, OnInit, isDevMode, AfterViewChecked, AfterViewInit, ComponentRef, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>Angular change detection {{log()}} {{title}} </h1>

    <ta-child></ta-child>

    <!-- <div class='sectionSlid' slickContainer #slickController="slick" [slickConfig]="config" >
      <ng-container *ngIf="slickController.initialize">
        <img slickItem *ngFor="let itm of data.ReportImages;" alt="צילום של המכונית במקום העבירה" src="{{itm}}">
      </ng-container>
    </div> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'hello'

  ngOnInit() {
    // window.setTimeout
    // setTimeout(() => {
    //   console.log('timer in parent');
    // }, 1000)
  }

  log() {
    // this.title = 'world'
    console.log('CD AppComponent');
    // console.log(isDevMode());
    // return Math.random();
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.title = 'world'
  //   });
  // }
}

// setTimeout(() => {
//   console.log('timer');
// }, 1000)

/**
picture-dialog.component.html:5 ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'ngIf: false'. Current value: 'ngIf: true'.
    at viewDebugError (core.js.pre-build-optimizer.js:28793)
    at expressionChangedAfterItHasBeenCheckedError (core.js.pre-build-optimizer.js:28770)
    at checkBindingNoChanges (core.js.pre-build-optimizer.js:29758)
    at checkNoChangesNodeInline (core.js.pre-build-optimizer.js:44443)
    at checkNoChangesNode (core.js.pre-build-optimizer.js:44416)
    at debugCheckNoChangesNode (core.js.pre-build-optimizer.js:45377)
    at debugCheckDirectivesFn (core.js.pre-build-optimizer.js:45274)
    at Object.updateDirectives (picture-dialog.component.html:5)
    at Object.debugUpdateDirectives [as updateDirectives] (core.js.pre-build-optimizer.js:45259)
    at checkNoChangesView (core.js.pre-build-optimizer.js:44249)


 */
