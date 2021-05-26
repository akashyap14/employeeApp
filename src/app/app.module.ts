import { EmployeeCanactivateGuardService } from './employee-canactivate-guard.service';


import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import {FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';
import { EmployeeResolveGuardService } from './employee-resolve-guard.service';
import { NotfoundComponent } from './notfound/notfound.component';

var appRoutes : Routes = [
  { path:'list', 
    component : ListEmployeesComponent,
    resolve : { employeeList :  EmployeeResolveGuardService } 
  },
  {  
    path:'create',
    component : CreateEmployeeComponent,
    canDeactivate : [CreateEmployeeCanDeactivateGuardService]
  },
  {  
    path:'edit/:id',
    component : CreateEmployeeComponent,
    canDeactivate : [CreateEmployeeCanDeactivateGuardService]
  },
  {  
    path:'employees/:id',
    component : EmployeeDetailsComponent,
    canActivate : [EmployeeCanactivateGuardService]
  },
  {  
    path:'notfound',
    component : NotfoundComponent
  },
  { path:'', redirectTo : '/list', pathMatch : 'full' },
  {  
    path:'**',
    component : NotfoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes,{enableTracing : false}),
    FormsModule 
  ],
  providers: [CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
