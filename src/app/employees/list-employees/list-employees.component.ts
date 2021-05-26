import { EmployeeServiceService } from './../../employee-service.service';
import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees : Employee[] = [];
  // arrayIndex =1;
  // employeeToDisplay : Employee;
  // dataFromChild : string;
  private _searchTerm : string;
  filteredEmployees : Employee[];

  get searchTerm(){
    return this._searchTerm;
  }
  set searchTerm(value : string){
    this._searchTerm = value;
    this.filteredEmployees = this.fitleringEmployee(value);
  }

  fitleringEmployee(value : string){
    return this.employees.filter( emp => emp.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
  }





  constructor(private _router : Router,
              private _route : ActivatedRoute) { 

                this.employees= this._route.snapshot.data['employeeList'];
                if(this._route.snapshot.queryParamMap.has('searchTerm')){
                  this.searchTerm = <string>this._route.snapshot.queryParamMap.get('searchTerm');
                  console.log(this.searchTerm)
                }else{
                  this.filteredEmployees = this.employees;
                }

              }

  ngOnInit(): void { 
  }

  onDeleteNotification(val : string){
      const val1 = Number(val);
      const i = this.filteredEmployees.findIndex( e=> e.id === val1);
      if( i !== -1){
      this.filteredEmployees.splice(i,1);
    }
  }

  // nextEmployee(){
  //     if(this.arrayIndex <=2){
  //       this.employeeToDisplay = this.employees[this.arrayIndex];
  //       this.arrayIndex++;

  //     }else{
  //       this.employeeToDisplay = this.employees[0];
  //       this.arrayIndex = 1;
  //     }
      
  // }

  // handleNotify(val : string){
  //   this.dataFromChild = val;

  // }

}
