import { Component, OnInit, NgZone, ChangeDetectorRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'ta-child',
  template: `
  <h1 *ngIf="isLoading">Loading...</h1>
  `
})
export class SpinnerComponent implements OnInit {
  isLoading = true;

  constructor(private _zone: NgZone, private _cd : ChangeDetectorRef) { }

  ngOnInit() {
    this._zone.onUnstable.subscribe(() => {

    });

    this._zone.onStable.subscribe(() => {
      this.isLoading = false;
    })

    this._zone.runOutsideAngular(() => {
      /// load the async maps stuff
      /// stuff here will not update the template
      this._cd.detectChanges();
    })
  }
}
