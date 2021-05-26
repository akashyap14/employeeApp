import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './models/employee.model';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(value: Employee[], searchTerm : string ): Employee[] {
    if(!value || !searchTerm){
      return value;
    }
    else{
      // return value.filter( emp =>{
      //   emp.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      // });
      return value.filter( emp => emp.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    }
  }

}
