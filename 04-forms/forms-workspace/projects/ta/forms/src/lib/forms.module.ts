import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { RepeatPasswordDirective } from './directives/repeat-password.directive';


@NgModule({
  declarations: [FormsComponent, RepeatPasswordDirective],
  imports: [
  ],
  exports: [FormsComponent, RepeatPasswordDirective]
})
export class FormsModule { }
