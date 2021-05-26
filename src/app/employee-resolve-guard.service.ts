import { Observable } from 'rxjs';
import { EmployeeServiceService } from './employee-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolveGuardService implements Resolve<Employee[]> {

  constructor(private _employeeService : EmployeeServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]>{
    
    return this._employeeService.getEmployee();
  }
}
