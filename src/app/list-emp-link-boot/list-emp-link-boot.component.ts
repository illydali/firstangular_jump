import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeBootService } from '../service/employee-link-boot.service';

@Component({
  selector: 'app-list-emp-link-boot',
  templateUrl: './list-emp-link-boot.component.html',
  styleUrls: ['./list-emp-link-boot.component.css']
})
export class ListEmpLinkBootComponent implements OnInit {

  employees?: Employee[];
  employeeService: EmployeeBootService;
  // instantiates the employee service
  constructor(employeeService: EmployeeBootService, private router:Router) {
    this.employeeService = employeeService;
  }

  // populates the data into the employees array.
  ngOnInit(): void {
    //inintialize
    this.employeeService.getEmployees().subscribe(
      (employeeData) => { this.employees = employeeData }
    );
  }
  deleteEmployee(toDeleteEmployee : Employee) : void {
    this.employeeService.deleteEmployee(toDeleteEmployee.id).subscribe(
      (data)=> {
        // remove from array
        this.employees = this.employees.filter((employee) => employee != toDeleteEmployee )
      }
    )
  }
  updateEmployee(id :number) {
    //navigate to update emp comp
    this.router.navigate(['employees-update-boot',id]);
  }

}

