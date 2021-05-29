import { EmployeeServiceService } from './../../employee-service.service';
import { Employee } from './../../models/employee.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormsModule, MaxLengthValidator, NgForm} from '@angular/forms';
import {ConfirmEqualValidatorDirective} from './../../shared/confirm-equal-validator.directive';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm : NgForm;

  id : number;
  spin : boolean = false;
  cardTitle : string;

  preview : boolean = false;
  departments : any[] = [
    { id :1 , name : 'HelpDesk'},
    { id :2 , name : 'HR'},
    { id :3 , name : 'IT'},
    { id :4 , name : 'Finance'},
    { id :5 , name : 'Admin'},
  ];

  constructor(private _employeeService : EmployeeServiceService,
              private _router : Router,
              private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe( parameterMap =>{
        this.id = <number>(parameterMap.get('id') as unknown);
        //console.log(this._employeeService.getEmployeeById(this.id));
        
    })

    if(!!this.id){
      this.spin = true;
      this.cardTitle = 'Edit Employee'

    }
    else{
      this.cardTitle = 'Create Employee'
    }

    setTimeout( ()=>{

      this._employeeService.getEmployeeById(this.id)
                .subscribe( (emp)=>{
                  this.createEmployeeForm.control.patchValue(emp);
                  console.log(emp);
                })
      this.spin = false;
    },2000)

  }

  saveEmployee(emp : Employee ){
    emp.id = this.id;

    if(emp.id === null){
      this._employeeService.save(emp)
      .subscribe((data)=>{
        console.log(data);
        this.createEmployeeForm.resetForm();
        this._router.navigate(['list']);
      },
      (error : any) => console.log(error));
    }
    else{
      this._employeeService.updateEmployee(emp)
          .subscribe(()=>{
            this.createEmployeeForm.resetForm();
            this._router.navigate(['list']);
          },
          (error : any) => console.log(error))
    }
    
    

  }

  togglePreview(){
    this.preview = !this.preview;
  }

}
