import { Employee } from './models/employee.model';
import { Injectable } from '@angular/core';
import {of,Observable, throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  url : string = 'http://localhost:3000/employees';

  constructor(private _httpClient : HttpClient){

  }

  listEmployees : Employee[] = [
    {
      id :1,
      name : 'John',
      gender : 'male',
      contactPreference : 'email',
      email : 'john@abc.com',
      phoneNumber : 7894561232,
      dateOfBirth : '1995-12-05',
      department : '3',
      isActive : true,
      photoPath : 'https://specials-images.forbesimg.com/imageserve/5d3d7a55f1176b000897d627/960x0.jpg?fit=scale'
    },
    {
      id :2,
      name : 'Mark',
      gender : 'female',
      contactPreference : 'phone',
      email : 'mark@abc.com',
      phoneNumber : 7894561232,
      dateOfBirth : '1995-12-05',
      department : '2',
      isActive : true,
      photoPath : 'https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg'
    },
    {
      id :3,
      name : 'Som',
      gender : 'male',
      contactPreference : 'phone',
      email : 'Soma@abc.com',
      phoneNumber : 7894561232,
      dateOfBirth : '1995-12-05'  ,
      department : '4',
      isActive : true,
      photoPath : 'http://www.vayak.net/images/employee.jpg'
    }

  ]

  getEmployee() : Observable<Employee[]> {
    //return of(this.listEmployees);
    return this._httpClient.get<Employee[]>(this.url)
          .pipe(catchError(this.handleError))
        
  }

  private handleError(errorResponse : HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client side Error : ',errorResponse.error.message)
    }
    else{
      console.error('Server side error: ',errorResponse)
    }
    return throwError('We are looking into it');
  }

  getEmployeeById(id : number) : Observable<Employee>  {
    //return this.listEmployees[id-1];

    return this._httpClient.get<Employee>(`${this.url}\\${id}`)
            .pipe(catchError(this.handleError));
  }

  save(employee : Employee){

    return this._httpClient.post<Employee>(this.url,employee,{
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
    .pipe(catchError(this.handleError));

    if(employee.id === null){
      // const maxid = this.listEmployees.reduce((e1,e2)=>{
      //   return (e1 > e2) ? e1 : e2;
      // }).id;
      // employee.id = maxid + 1;
      // this.listEmployees.push(employee);
      //console.log(maxid);

    }
    // else{
    //   let foundIndex = this.listEmployees.findIndex( e=> e.id == employee.id);
    //   this.listEmployees[foundIndex] = employee;
    //   console.log(employee);
    //   console.log(this.listEmployees[foundIndex] );
    //   return employee
    // }    
  } 

  updateEmployee(employee : Employee){

    return this._httpClient.put<Employee>(`${this.url}\\${employee.id}`,employee,{
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
    .pipe(catchError(this.handleError));  
  } 




  deleteEmployee(id : number){

    return this._httpClient.delete<Employee>(`${this.url}\\${id}`)
    .pipe(catchError(this.handleError));  
  } 



    // const i = this.listEmployees.findIndex( e=> e.id === id);
    // if( i !== -1){
    //   this.listEmployees.splice(i,1);
    // }
    
  

}
