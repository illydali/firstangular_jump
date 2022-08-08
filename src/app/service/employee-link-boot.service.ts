import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBootService {
  baseUrl : string = "http://localhost:8080/api/employees";

  constructor(private httpClient: HttpClient) {
  }

  getEmployees() {
    // get method
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }
  
  getEmployeeById(id: number) {
    // get method
    return this.httpClient.get<Employee>(this.baseUrl + "/" + id);
  }

  createEmployee(employee: Employee) {
    // post method
    return this.httpClient.post(this.baseUrl, employee);
  }

  updateEmployee(id:number, employee:any) : Observable<Object> {
    // put method, aka update
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number) {
    // delete method
    return this.httpClient.delete<Employee>(this.baseUrl + "/" + id);
  }

}
