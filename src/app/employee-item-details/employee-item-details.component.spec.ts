import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeItemDetailsComponent } from './employee-item-details.component';

xdescribe('EmployeeItemDetailsComponent', () => {
  let component: EmployeeItemDetailsComponent;
  let fixture: ComponentFixture<EmployeeItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
