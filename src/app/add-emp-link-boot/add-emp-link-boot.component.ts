import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeBootService } from '../service/employee-link-boot.service';

@Component({
  selector: 'app-add-emp-link-boot',
  templateUrl: './add-emp-link-boot.component.html',
  styleUrls: ['./add-emp-link-boot.component.css']
})
export class AddEmpLinkBootComponent implements OnInit {

  addForm?: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeBootService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      name: [],
      salary: [],
    })
  }

  saveEmployee() {
    alert("New Employee Added..")
    // call service method here
    console.log(this.addForm.value);
    this.employeeService.createEmployee(this.addForm.value).subscribe((data) => {
      return console.log("data saved") 
    })
  }

}
