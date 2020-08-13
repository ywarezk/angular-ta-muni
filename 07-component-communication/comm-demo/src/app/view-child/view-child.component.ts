import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, TemplateRef, ViewContainerRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'ta-view-child',
  template: `
    <h1 #myH1>
      @ViewChild
    </h1>
    <ta-child></ta-child>
    <ta-child #second></ta-child>

    <ng-template #successMessage>
      <h1>
        hello
      </h1>
      <ta-child></ta-child>
    </ng-template>

    <div #containerForSuccessMessage></div>



    <!-- <ng-container *ngTemplateOutlet="successMessage"></ng-container> -->
  `
})
export class ViewChildComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('myH1')
  h1FromTemplate: ElementRef<HTMLHeadingElement>;

  @ViewChild(ChildComponent)
  childFromTemplate: ChildComponent;

  @ViewChild('second')
  childFromTemplate2: ChildComponent;

  @ViewChildren(ChildComponent)
  allTheChildsFromTemplate: QueryList<ChildComponent>

  @ViewChild(TemplateRef)
  myTemplateVar: TemplateRef<any>

  @ViewChild('containerForSuccessMessage', {read: ViewContainerRef})
  container: ViewContainerRef;

  constructor() { }

  ngOnInit() { }

  /**
   * going to jump once 1
   * the view child properties will be populated here
   * put init actions for the view child properties
   * init actions after my view and all my children view has been initiated
   */
  ngAfterViewInit() {
    this.container.createEmbeddedView(this.myTemplateVar);
  }

  /**
   * this is called every change detection
   * you place here logic that should react to changes in my view or in my children view
   * You place here logic that should run when the @ViewChild properties change

   */
  ngAfterViewChecked() {
    // this.title = '' // error changed after checked
  }
}
