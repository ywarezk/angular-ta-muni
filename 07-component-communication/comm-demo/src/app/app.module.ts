import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { environment } from 'src/environments/environment';
import { PickerDemoComponent } from './picker-demo/piker-demo.component';
import { MatDatepickerModule, MatDatepickerIntl } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurData } from './our-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PickerDemoComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [{
      provide: MAT_DATE_LOCALE,
      useValue: 'he-il'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
