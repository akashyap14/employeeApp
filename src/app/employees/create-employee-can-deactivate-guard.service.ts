import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {

  constructor() { }

  canDeactivate(component: CreateEmployeeComponent): boolean {

    if(component.createEmployeeForm.dirty){
       return confirm("Are you sure you want to cancel the changes?")
    }
    else{
      return true;
    }
  }

}
 