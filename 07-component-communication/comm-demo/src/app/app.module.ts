import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PickerDemoComponent } from './picker-demo/piker-demo.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrvComponent } from './trv/trv.component';
import { FormsModule } from '@angular/forms';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PickerDemoComponent,
    TrvComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{
      provide: MAT_DATE_LOCALE,
      useValue: 'he-il'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
