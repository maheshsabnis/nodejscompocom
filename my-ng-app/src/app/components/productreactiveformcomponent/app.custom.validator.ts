import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  static checkEven(ctrl:AbstractControl):any {
    // read value from the UI element on which the
    // validator is applied
     let value = ctrl.value;
     if(parseInt(value) % 2 === 0){
       return null; // valid
     }
     return {even:false}; // invalid
  }
}
