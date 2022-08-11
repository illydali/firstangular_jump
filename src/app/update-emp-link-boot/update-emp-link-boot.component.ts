import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeBootService } from '../service/employee-link-boot.service';

@Component({
  selector: 'app-update-emp-link-boot',
  templateUrl: './update-emp-link-boot.component.html',
  styleUrls: ['./update-emp-link-boot.component.css']
})
export class UpdateEmpLinkBootComponent implements OnInit {

  id:number;
  employee: Employee;
  constructor(private employeeService: EmployeeBootService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.id = 1;
    this.id = this.route.snapshot.params['id'];
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
    this.router.navigate(["/employees-boot"])
  }

}
