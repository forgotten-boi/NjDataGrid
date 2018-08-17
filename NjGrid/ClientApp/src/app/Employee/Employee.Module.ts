import '../../rxjs-operators';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './Employee.Routing';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from '../utils/lower-case-url-serializer';
import { EmployeeService } from './Employee.Service';


import { EmployeeAddComponent } from './Employee-add.component'
import { EmployeeListComponent } from './Employee-list.Component'

import { EmployeeDetailsComponent } from './Employee-Details.Component';
import { CommonGridModule } from "../njdatagrid/commongrid.module";
//import { ParentDialogComponent } from '../../../app/ParentDialogComponent';
//import { MdDialogModule, MdTabsModule, MdCardModule, MdSlideToggleModule } from '@angular/material';
import { EmployeeProfileDetailsDialog } from './EmployeeProfileDetails';
import { AlertNotificationService } from '../utils/AlertNotificationService';
import { EmailValidator } from '@angular/forms';
import { EmployeeAddDetailsComponent } from '../Employee/EmployeeDetails-add-details.Component';
//import { ItemsService } from '../utils/ItemsService';
//import { NotificationService } from '../utils/notification.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        //DatePickerModule,
        //SharedModule,
        //MdDialogModule,
        //MdTabsModule,
        //MdCardModule,
        CommonGridModule,
        //MdSlideToggleModule
        
    ],
    entryComponents: [
        EmployeeProfileDetailsDialog,
    ],
    declarations: [EmployeeAddComponent, EmployeeProfileDetailsDialog, EmployeeListComponent, EmployeeDetailsComponent, EmployeeAddDetailsComponent],
    exports: [],
    providers: [
        //ItemsService,
        //NotificationService,

        EmployeeService,
        AlertNotificationService]
})
export class EmployeeModule { }
