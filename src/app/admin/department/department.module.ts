import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './department.component';
import { DepartmentRoutingModule } from './department-routing.module';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    FormsModule,          // ✅ add this
    DepartmentRoutingModule
  ]
})
export class DepartmentModule {}
