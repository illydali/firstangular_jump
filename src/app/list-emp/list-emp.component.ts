import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})

/* important to remember the syntx */
export class ListEmpComponent implements OnInit {
  employees? : Employee[];

  // instantiates the employee service instance
  // -> shortcut method
  constructor(private employeeService: EmployeeService) { }

  // -> long method 
  /* constructor(private employee: EmployeeService) {
    this.employeeService = employeeService;
  } */

  // populates the date into the employees array 
  ngOnInit(): void {
    // initialize
    this.employeeService.getEmployees().subscribe(
      (employeeData) => {this.employees = employeeData}
    )
  }

  deleteEmployee(employeeToDelete: Employee) : void {
    this.employeeService.deleteEmployee(employeeToDelete.id).subscribe(
      (data)=> {
      // remove from employee array
      this.employees = this.employees.filter((e) => e != employeeToDelete) 
    })
  }

}
