export class EmployeeDetails {
  id: number;
  employee_name: string;
  employee_salary: string;
  employee_age: number;
  profile_image: string;
}

export class EmployeeApi {
  data: Array<EmployeeDetails>;
  message: string;
  status: string;
}
