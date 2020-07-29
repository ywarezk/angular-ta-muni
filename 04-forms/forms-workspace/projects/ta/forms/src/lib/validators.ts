import { ValidatorFn, FormGroup, AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, debounceTime, tap, mergeMap } from 'rxjs/operators';


export function repeatValidatorCreator([passwordName, repeatName]) {
  return (group: FormGroup) => {
    if (group.controls[passwordName]?.value !== group.controls[repeatName]?.value) {
      return {
        taRepeat: "The password and repeat does not match"
      }
    }
    return null;
  }
}

// export const repeatValidator: ValidatorFn = function(group: FormGroup) {
//   if (group.controls['password']?.value !== group.controls['repeat']?.value) {
//     return {
//       taRepeat: "The password and repeat does not match"
//     }
//   }
//   return null;
// }

export function usernameValidatorCreator(check: (username: string) => Observable<boolean>) {

  // const valueSubject: BehaviorSubject<string> = new BehaviorSubject('');

  return (control: FormControl): Observable<ValidationErrors | null> => {
    // valueSubject.next(control.value);

    // return valueSubject.pipe(
    //   tap((data) => console.log(`debugging1: ${data}`)),
    //   debounceTime(1000),
    //   tap((data) => console.log(`debugging2: ${data}`)),
    //   mergeMap((value) => check(value)),
    //   tap((data) => console.log(`debugging3: ${data}`)),
    //   map((isValid) => isValid ? null : {
    //     username: 'The username is not unique'
    //   }),
    //   tap((data) => console.log(`debugging4: ${data}`)),
    // );

    return check(control?.value).pipe(
      map((isValid) => isValid ? null : {
        username: 'The username is not unique'
      }),
      // tap((data) => console.log(`debugging: ${data}`))
    )
  }
}
