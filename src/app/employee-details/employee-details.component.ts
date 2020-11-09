import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../employee-service.service';
import { EmployeeApi, EmployeeDetails } from './employee.model';
import { EmployeeService } from '../employee.service';
import { EmployeeItemDetailsComponent } from '../employee-item-details/employee-item-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeData: Array<any>;
  showmodal = false;
  selectedEmployee: Array<EmployeeDetails>;

  constructor(public dialog: MatDialog, public employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeeDetails();
  }


  /**
   * getEmployeeDetails to fetch all the employee list.
   */
  getEmployeeDetails() {
    this.employeeService.getEmployes().subscribe(
      (data: EmployeeApi) => data.status === 'success' ? this.employeeData = data.data : this.employeeData = [],
      error => this.errorHandler(error)
      // (error.error.message)
    );
  }

  /**
   * @index {number}
   * getSelectEmployeeDetails to fetch the employee details.
   */
  getSelectEmployeeDetails(index: number) {
    // this.showmodal = true;
    this.employeeService.getEmployesDetails(this.employeeData[index].id).subscribe(
      (data: EmployeeApi) => this.assignEmployeeDetails(data),
      error => this.errorHandler(error));
  }


  /**
   * @index {number}
   * deleteEmployee used to delete the data.
   */
  deleteEmployee(index: number) {
    this.employeeService.DeleteEmployes(this.employeeData[index].id).subscribe(
      data => console.log('success', data),
      error => this.errorHandler(error)
    );
  }

  /**
   * @error used to handle the error , we can do error
   * handle in 2 ways in service level and component level.
   */
  errorHandler(error) {
    alert(error.error.message);
  }

  /**
   * @data {EmployeeApi} to assign all the values to the method.
   *
   */
  assignEmployeeDetails(data: EmployeeApi) {
    this.openDialog(data.data);
  }



  /**
   * @data here we will get the data both string and the object .
   * openDialog is the method used to open the popup
   */
  openDialog(data: any) {
    const dialogRef = this.dialog.open(EmployeeItemDetailsComponent, {
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      // alert(result)
      console.log(result);
    });
  }
}
