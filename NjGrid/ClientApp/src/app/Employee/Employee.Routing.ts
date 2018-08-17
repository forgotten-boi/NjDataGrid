import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './Employee-add.component';
import { EmployeeListComponent } from './Employee-list.Component';

import { EmployeeDetailsComponent } from './Employee-Details.Component';
import { EmployeeAddDetailsComponent } from '../Employee/EmployeeDetails-add-details.Component';
export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'employeeAdd', component: EmployeeAddComponent },
    { path: 'employeeManagement', component: EmployeeAddDetailsComponent },
    { path: 'employeeList', component: EmployeeListComponent },
    { path: 'employeeEdit/:id', component: EmployeeAddComponent},
    { path: 'employeeProfile', component: EmployeeDetailsComponent }
]);
