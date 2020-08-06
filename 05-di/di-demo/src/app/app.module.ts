import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HelloService, HELLO_CONFIGURATION } from './services/hello.service';
// import { StamModule } from '../stam/stam.module';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    // StamModule
  ],
  providers: [
    {
      provide: 'hello',
      useValue: 'hello from AppModule'
    },
    // {
    //   provide: HelloService,
    //   useClass: HelloService
    // },
    //{
    //   provide: 'hello',
    //   useValue: {message: 'asdfasdf'}
    // },
    HelloService,
    {
      provide: HELLO_CONFIGURATION,
      useValue: {
        name: 'Pigletshvily Chaitovski'
      }
    },
    {
      provide: 'stam',
      // multi: true,
      useValue: 'foo'
    },
    {
      provide: 'stam',
      // multi: true,
      useValue: 'bar'
    },
    {
      provide: 'stam',
      // multi: true,
      useValue: 'piglet'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
