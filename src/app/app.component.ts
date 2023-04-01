import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'employee-app';
  employees: any[] = [];

  // constructor(private employeeService: EmployeeService) {}

  // ngOnInit() {
  //   this.employeeService.getEmployees().subscribe(data => {
  //     this.employees = data;
  //   });
  // }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEmployees().subscribe((data: any[]) => {
      this.employees = data;
    });
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
