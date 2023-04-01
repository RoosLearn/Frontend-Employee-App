import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
