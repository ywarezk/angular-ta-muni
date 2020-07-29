import { Directive, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, FormControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { usernameValidatorCreator } from '../validators';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[taUsernameUnique]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: UsernameUniqueDirective
    }
  ]
})
export class UsernameUniqueDirective implements AsyncValidator {
  @Input('taUsernameUnique')
  check: (username: string) => Observable<boolean>

  validate(control: FormControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return usernameValidatorCreator(this.check)(control).pipe(
      // tap((data) => console.log(`debugging: ${data}`))
    );
  }

}
