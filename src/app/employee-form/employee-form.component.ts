import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee = {
    name: '',
    designation: '',
    location: '',
    salary: null
  };

  onSubmit() {
    console.log('Employee Form submitted!');
  }
}
