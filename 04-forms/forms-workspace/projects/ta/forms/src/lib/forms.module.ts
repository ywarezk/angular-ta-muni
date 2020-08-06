import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { RepeatPasswordDirective } from './directives/repeat-password.directive';
import { UsernameUniqueDirective } from './directives/username-unique.directive';
import { ReactiveFormsModule } from '@angular/forms';
import {PhoneNumberComponent} from './components/phone-number.component';
import { UploadDirective } from './directives/upload.directive';


@NgModule({
  declarations: [
    FormsComponent,
    RepeatPasswordDirective,
    UsernameUniqueDirective,
    PhoneNumberComponent,
    UploadDirective
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    FormsComponent,
    RepeatPasswordDirective,
    UsernameUniqueDirective,
    PhoneNumberComponent,
    UploadDirective
  ]
})
export class FormsModule { }
