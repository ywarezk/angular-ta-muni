import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-forms2',
  template: `
    <div class="ta-forms2">
      <p>
        forms2 works!
      </p>
    </div>

  `,
  styleUrls: [
    "forms2.component.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class Forms2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
