/**
 * check the password and the repeat password that they match
 * <div taRepeat>
 * <div setValidators>
 * <div taRepeat taId taPhone>
 * <input taRepeat [formControl] ... />
 */

import { Directive, Input, Inject, SkipSelf } from '@angular/core';
import {
  FormControl,
  Validator,
  AbstractControl,
  ValidationErrors, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor,  } from '@angular/forms';
import { repeatValidatorCreator } from '../validators';



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
  @Input('taRepeat')
  fieldNames: [string, string] = ['defaultPassword', 'defaultRepeat'];

  constructor() { }

  validate(group: FormGroup): ValidationErrors {
    return repeatValidatorCreator(this.fieldNames)(group);
  }
}


// @Directive({
//   selector: '[taRepeat2]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       multi: true,
//       useExisting: RepeatPasswordDirective
//     }
//   ]
// })
// export class RepeatPasswordDirective2 implements Validator {
//   @Input('taRepeat')
//   fieldNames: [string, string] = ['defaultPassword', 'defaultRepeat'];

//   // constructor(@SkipSelf() @Inject(NG_VALUE_ACCESSOR) private _papa: ControlValueAccessor[]) { }

//   validate(control: FormControl): ValidationErrors {
//     if (control.parent.controls['password']?.value === control?.value) {
//       ...
//     }
//   }
// }
