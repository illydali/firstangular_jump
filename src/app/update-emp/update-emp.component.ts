import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  id:number;
  employee: Employee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = 1;
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id)
    .subscribe(searchEmpById => {
      console.log(searchEmpById)
      this.employee =searchEmpById;
    },
      error => {
        console.log(error);
      }
    )
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

}
