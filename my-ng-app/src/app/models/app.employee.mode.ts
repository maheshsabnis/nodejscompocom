export class Employee {
  [x:string]:any;
  constructor(public EmpNo:number, public EmpName:string){}
}


export const Employees:Array<Employee> = new Array<Employee>();
Employees.push(new Employee(1,'A'));
Employees.push(new Employee(2,'B'));
