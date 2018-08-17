import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './Employee/Employee-add.component';
import { EmployeeAddDetailsComponent } from './Employee/EmployeeDetails-add-details.Component';
import { EmployeeListComponent } from './Employee/Employee-list.Component';
import { EmployeeDetailsComponent } from './Employee/Employee-Details.Component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'employeeAdd', component: EmployeeAddComponent },
  { path: 'employeeManagement', component: EmployeeAddDetailsComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'employeeEdit/:id', component: EmployeeAddComponent },
  { path: 'employeeProfile', component: EmployeeDetailsComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
