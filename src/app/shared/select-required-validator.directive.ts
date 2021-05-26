import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[appSelectRequiredValidator]'
})
export class SelectRequiredValidatorDirective implements Validators {
   
      validate(c : AbstractControl) : {[key : string] : any}| null {
        return c.value == -1 ? {'defaultSelected' : true} : null;
      }
}
