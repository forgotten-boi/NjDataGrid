import { GridFilterComponent } from './njdatagrid/gridfilter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
//import { routing } from './app.routing';
import { EmployeeAddComponent } from './Employee/Employee-add.component';
import { EmployeeAddDetailsComponent } from './Employee/EmployeeDetails-add-details.Component';
import { EmployeeListComponent } from './Employee/Employee-list.Component';
import { EmployeeDetailsComponent } from './Employee/Employee-Details.Component';
import { AlertDialogComponent } from './AlertDialogComponent';
import { jDataGridComponent } from './njdatagrid/jDataGrid';
import { jDataTableComponent } from './njdatagrid/JDataTable';
import { PaginationComponent } from './njdatagrid/pagination.component';
import { EmployeeService } from './Employee/Employee.Service';
import { MatProgressSpinnerModule, MatIconModule, MatToolbarModule, MatDialogModule, MatMenuModule, MatButtonModule, MatCardModule } from '@angular/material';
import { CommonGridModule } from './njdatagrid/commongrid.module';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AlertDialogComponent,
    EmployeeAddComponent,
    EmployeeAddDetailsComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    //jDataGridComponent,
    //jDataTableComponent,
    //PaginationComponent,
    //GridFilterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    //routing,
    RouterModule.forRoot([
      { path: 'employeeAdd', component: EmployeeAddComponent },
      { path: 'employeeManagement', component: EmployeeAddDetailsComponent },
      { path: 'employeeList', component: EmployeeListComponent },
      { path: 'employeeEdit/:id', component: EmployeeAddComponent },
      { path: 'employeeProfile', component: EmployeeDetailsComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    // MdDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonGridModule,
    //routing,

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
