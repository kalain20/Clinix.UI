import { AbstractControl, ValidatorFn } from '@angular/forms';

export function UsernameValidator(): ValidatorFn
{
   return (control: AbstractControl): {[key: string]: boolean} | null =>{
       if(control.value.trim == "Alain")
       {
           return {"NameNotAllowed" : true};
       }
       return null;
   };
}