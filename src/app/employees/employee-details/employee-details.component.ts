import { EmployeeServiceService } from './../../employee-service.service';
import { merge, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee : Employee;
  _id : number;
  
  constructor(private _router : ActivatedRoute , private _employeeService : EmployeeServiceService,
              private _routerwa : Router) { }

  ngOnInit(): void {
   this._router.paramMap.subscribe( params => {
     this._id = <number>(params.get('id') as unknown);
     this.employee = this._employeeService.getEmployeeById(this._id);
   })
  }

  goToNextEmployee(){
    if(this._id < 3){
      this._id++;
    }
    else{
      this._id = 1;
    }
    this._routerwa.navigate(['employees',this._id],{
      queryParamsHandling : "merge"
    });


  }


}
