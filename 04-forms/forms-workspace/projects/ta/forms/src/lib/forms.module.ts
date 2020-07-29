import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { RepeatPasswordDirective } from './directives/repeat-password.directive';
import { UsernameUniqueDirective } from './directives/username-unique.directive';


@NgModule({
  declarations: [FormsComponent, RepeatPasswordDirective, UsernameUniqueDirective],
  imports: [
  ],
  exports: [FormsComponent, RepeatPasswordDirective, UsernameUniqueDirective]
})
export class FormsModule { }
