import { Component, ComponentRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// JIT
// AOT

@Component({
  selector: 'app-root',
  template: `
    <h1 #hello>{{title}} {{hello.msg}}</h1>
    <hello1></hello1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('hello')
  h1Wrapper: ElementRef;

  title = 'child';
  hello = {msg: 'world'};

  ngAfterViewInit() {}
}
