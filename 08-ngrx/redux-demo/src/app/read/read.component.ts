import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from '../message.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ta-read',
  template: `
  <h1>
  <!-- messageService.greeting - will not trigger cd when on push -->
  <!--{{

    messageService.greeting$ | async
  }}-->

  {{
    greeting$ | async
  }}
  </h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadComponent {
  greeting$: Observable<string> = this._store.pipe(
    map((state: any) => state.message.greeting)
  )

  constructor(
    // public messageService: MessageService
    private _store: Store
  ) { }
}
