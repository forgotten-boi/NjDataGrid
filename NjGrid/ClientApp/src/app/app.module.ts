import { GridFilterComponent } from './njdatagrid/gridfilter.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeeAddComponent } from './Employee/Employee-add.component';
import { EmployeeAddDetailsComponent } from './Employee/EmployeeDetails-add-details.Component';
import { EmployeeListComponent } from './Employee/Employee-list.Component';
import { EmployeeDetailsComponent } from './Employee/Employee-Details.Component';
import { AlertDialogComponent } from './AlertDialogComponent';
import { jDataGridComponent } from './njdatagrid/jDataGrid';
import { jDataTableComponent } from './njdatagrid/JDataTable';
import { PaginationComponent } from './njdatagrid/pagination.component';
import { EmployeeService } from './Employee/Employee.Service';
import { EmployeeProfileDetailsDialog } from './Employee/EmployeeProfileDetails';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonGridModule } from './njdatagrid/commongrid.module';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';
import { ConfigService } from './utils/config.service';
import { AlertNotificationService } from './utils/AlertNotificationService';

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
    EmployeeProfileDetailsDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'employeeAdd', component: EmployeeAddComponent },
      { path: 'employeeManagement', component: EmployeeAddDetailsComponent },
      { path: 'employeelist', component: EmployeeListComponent },
      { path: 'employeeEdit/:id', component: EmployeeAddComponent },
      { path: 'employeeProfile', component: EmployeeDetailsComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: EmployeeListComponent, pathMatch: 'full' }
    ]),
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonGridModule,
  ],
  providers: [EmployeeService, ConfigService, AlertNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
