import { NgModule } from '@angular/core';
import './stam.module.scss';
import { Hello1Component } from './hello1/hello1.component';
import { Hello2Component } from './hello2/hello2.component';

@NgModule({
  imports: [],
  exports: [Hello1Component, Hello2Component],
  providers: [],
  declarations: [Hello1Component, Hello2Component]
})
export class StamModule { }
