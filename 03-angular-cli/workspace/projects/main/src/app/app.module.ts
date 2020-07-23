import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Forms2Module } from '@ta/forms2@dev';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Forms2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
