import { EmployeeServiceService } from './../employee-service.service';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  selectedEmployeeId : number;
  @Input('searchTerm') searchTerm : string;

  @Input('employee') employee : Employee;
  confirmDelete : boolean = false;
  isHidden : boolean = false;
  //@Output() notify : EventEmitter<string> = new EventEmitter();
  @Output() notifyDeletion : EventEmitter<string> = new EventEmitter();

  constructor(private _route : ActivatedRoute,private _router : Router,private _employeeService : EmployeeServiceService) { }

  ngOnInit(): void {
     +this._route.queryParamMap.subscribe( (queryParams) => { this.selectedEmployeeId = <number>(queryParams.get('id') as unknown)})

  }

  getEmployeeData() : string{
    return this.employee.name + ' ' + this.employee.gender;
  }

  viewEmployee(employeeID : number){
    this._router.navigate(['employees',employeeID],
        { queryParams : { 'searchTerm' : this.searchTerm}})
  }

  editEmployee(){
    this._router.navigate(['edit',this.employee.id])
  }

  deleteEmployee(){
    this._employeeService.deleteEmployee(this.employee.id)
      .subscribe( ()=> {
        console.log(`Deleted id : ${this.employee.id}`)
        this.notifyDeletion.emit(<string>(this.employee.id as unknown));
      },
      (err)=> { console.log(err)});
    
  }

  // handleClick(){
  //   this.notify.emit(this.employee.name);
  // }

  /*ngOnChanges(changes : SimpleChanges){
    const prevValue = <Employee>changes.employee.previousValue;
    const currentVal =<Employee>changes.employee.currentValue;

    console.log(`Previous value : ${prevValue ?  prevValue.name : 'Null'}  , Current Value : ${currentVal.name}`)



    console.log(changes);
  }*/

}
