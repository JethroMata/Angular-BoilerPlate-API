import { Component } from '@angular/core';

interface Department {
  id: number;
  name: string;
  description: string;
  employeeCount: number;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
})
export class DepartmentComponent {
  showForm = false;
  isEdit = false;
  departmentId: number | null = null;

  departmentName = '';
  departmentDescription = '';

  // Array to store departments
  departments: Department[] = [
    { id: 1, name: 'Engineering', description: 'Software development team', employeeCount: 1 },
    { id: 2, name: 'Marketing', description: 'Marketing team', employeeCount: 1 },
  ];

  // Show form for Add or Edit
  openForm(id: number | null) {
    this.showForm = true;
    this.departmentId = id;

    if (id === null) {
      // Add
      this.isEdit = false;
      this.departmentName = '';
      this.departmentDescription = '';
    } else {
      // Edit
      this.isEdit = true;
      const dept = this.departments.find(d => d.id === id);
      if (dept) {
        this.departmentName = dept.name;
        this.departmentDescription = dept.description;
      }
    }
  }

  cancelForm() {
    this.showForm = false;
  }

  saveDepartment() {
    if (this.isEdit && this.departmentId !== null) {
      // Update existing
      const dept = this.departments.find(d => d.id === this.departmentId);
      if (dept) {
        dept.name = this.departmentName;
        dept.description = this.departmentDescription;
      }
    } else {
      // Add new
      const newId = this.departments.length > 0 ? Math.max(...this.departments.map(d => d.id)) + 1 : 1;
      this.departments.push({
        id: newId,
        name: this.departmentName,
        description: this.departmentDescription,
        employeeCount: 0,
      });
    }

    // After saving, hide the form and clear input fields
    this.showForm = true;
    this.departmentName = '';
    this.departmentDescription = '';
  }

  deleteDepartment(id: number) {
    this.departments = this.departments.filter(d => d.id !== id);
  }
}