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
import { PhoneNumberFormComponent } from './phone-number/phone-number.component';
// import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, HelloInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NameReactiveComponent,
    RegisterComponent,
    UniqueUsernameComponent,
    PhoneNumberFormComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TaFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: JwtInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HelloInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
