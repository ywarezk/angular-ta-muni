import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeComponent } from './change/change.component';
import { ReadComponent } from './read/read.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { messageReducer } from './ngrx/reducers/message.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      message: messageReducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
