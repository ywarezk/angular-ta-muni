import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StamModule } from '../stam/stam.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StamModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
