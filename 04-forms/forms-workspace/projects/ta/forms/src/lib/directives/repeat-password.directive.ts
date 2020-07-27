import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[taRepeat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: RepeatPasswordDirective
    }
  ]
})
export class RepeatPasswordDirective implements Validator {
  constructor() { }

  validate(group: FormGroup): ValidationErrors {
    if (group.controls['password'].value !== group.controls['repeat'].value) {
      return {
        taRepeat: "The password and repeat does not match"
      }
    }
    return null;
  }
}
