import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeApi } from './employee-details/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://dummy.restapiexample.com/api/v1/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
  };
  constructor(private http: HttpClient) { }
  // To get all the employees list.
  public getEmployes() {
    return (this.http.get(this.baseUrl + 'employees'));
  }
  // To get the single employee.
  public getEmployesDetails(id: number) {
    return (this.http.get(this.baseUrl + 'employee/' + id));
  }

  // To delete the employee for the list.
  public DeleteEmployes(id: number) {
    return (this.http.delete(this.baseUrl + 'delete/' + id));
  }
  // To create and update of the employee.
  createEmployee(product: any) {
    const apiType = product.id === '' ? 'create' : 'update/' + product.id;
    if (product.id === '') {
      // delete product.id;
      return this.http.post(this.baseUrl + apiType, JSON.stringify(product), this.httpOptions);
    } else {
      return this.http.put(this.baseUrl + apiType, JSON.stringify(product), this.httpOptions);
    }
  }

}

