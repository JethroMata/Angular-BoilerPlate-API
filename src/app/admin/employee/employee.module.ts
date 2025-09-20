import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule, 
        EmployeeRoutingModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent
    ]
})
export class EmployeeModule { }
