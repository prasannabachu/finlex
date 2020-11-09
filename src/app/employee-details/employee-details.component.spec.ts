import { Overlay } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Observable, from } from 'rxjs';
import { EmployeeService } from '../employee.service';

import { EmployeeDetailsComponent } from './employee-details.component';

class MatDialogMock {

}

class HttpClientMock {

}


describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EmployeeDetailsComponent],
      providers: [
        { provide: MatDialog, useClass: MatDialogMock },
        { provide: HttpClient, useClass: HttpClientMock }
      ]
    });
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Title should be Employee Details', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const titleBtn: HTMLButtonElement = elem.querySelector('.title');
    expect(titleBtn.textContent).toContain('Employee Details');
  });

  it('Should load Employee details', () => {
    const service = TestBed.inject(EmployeeService);
    const testData = {status: '200', data: ['test','1', '2']}
    spyOn(service, 'getEmployes').and.returnValue(from([testData]));
    fixture.detectChanges();
    expect(component.employeeData.length).toBe(3);
  })

  it('Clicking \'Add\' Button should call Open Dialog ', () => {
    const elem: HTMLElement = fixture.debugElement.nativeElement;
    const addBtn: HTMLButtonElement = elem.querySelector('.add-btn');
    addBtn.click();
    spyOn(component, 'openDialog').and.callFake((data) => {

    });
    expect(component.openDialog).toHaveBeenCalled();
  });
});
