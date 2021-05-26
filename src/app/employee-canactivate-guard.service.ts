import { EmployeeServiceService } from './employee-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCanactivateGuardService implements CanActivate{

  constructor(private _employeeService : EmployeeServiceService,
              private _router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const employeeExists = !!this._employeeService.getEmployeeById(<number>(route.paramMap.get('id') as unknown))

      if(employeeExists){
        return true;
      }
      else{
          this._router.navigate(['notfound']);
          return false;
        
      }

  } 
}
