import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  //styleUrls: ['./employees.component.less']
})
export class EmployeeComponent implements OnInit {

  employees = [
    { id: 'EMP001', account: 'admin@example.com', position: 'Developer', department: 'Engineering', hireDate: '1/1/2025', status: 'Active' },
    { id: 'EMP002', account: 'user@example.com', position: 'Designer', department: 'Marketing', hireDate: '2/1/2025', status: 'Active' }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
  
  onAddEmployee(): void { /* ... */ }
  onEditEmployee(employee: any): void { /* ... */ }
  onRequests(employee: any): void { /* ... */ }
  onWorkflows(employee: any): void { /* ... */ }
  onTransfer(employee: any): void { /* ... */ }
}