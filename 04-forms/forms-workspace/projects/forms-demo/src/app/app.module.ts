import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameComponent } from './name/name.component';
import { NameReactiveComponent } from './name/name-reactive.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule as TaFormsModule  } from '@ta/forms';
import { HttpClientModule } from '@angular/common/http';
import { UniqueUsernameComponent } from './register/register2.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NameReactiveComponent,
    RegisterComponent,
    UniqueUsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TaFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
