import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDetails } from '../employee-details/employee.model';

@Component({
  selector: 'app-employee-item-details',
  templateUrl: './employee-item-details.component.html',
  styleUrls: ['./employee-item-details.component.css']
})
export class EmployeeItemDetailsComponent implements OnInit {
  @Input() input: any;
  productForm: FormGroup;
  DialogData: any;
  constructor(public fb: FormBuilder, public employeeService: EmployeeService,
              @Inject(MAT_DIALOG_DATA) public data: EmployeeDetails | any) { }


  ngOnInit() {
    this.employeeFormBuild();
    if (this.data !== '') {
      this.bindfomvalues();
    }
  }

  get f() {
    return this.productForm.controls;
  }

  /**
   * bindfomvalues used for binding the values to ui
   */
  bindfomvalues() {
    this.productForm.patchValue({
      employee_name: this.data.employee_name,
      employee_salary: this.data.employee_salary,
      employee_age: this.data.employee_age,
      id: this.data.id
    });
  }
  /**
   * @employeeFormBuild for building the form.
   */
  employeeFormBuild() {
    this.productForm = this.fb.group({
      employee_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      employee_salary: ['', [Validators.required, Validators.pattern('^[0-9]+(.[0-9]+)?$')]],
      employee_age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      id: '',
      profile_image: '',

    });
  }

  /**
   * @createUpdateEmployee used tocreate update the employee.
   */
  createUpdateEmployee() {
    this.employeeService.createEmployee(this.productForm.value).subscribe(
      data => alert('success'),
      error => alert(error.message)
    );
  }

}
