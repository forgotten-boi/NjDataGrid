import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeInterface } from './Employee.Interface';
import { EmployeeService } from './Employee.Service';
//import { NotificationService } from '../../shared/utils/notification.service';
//import { ISearchField } from '../../shared/SearchField';
import { DialogService } from "ng6-bootstrap-modal";
import { EmployeeDetailsComponent } from './Employee-Details.Component';
import { MatDialog } from '@angular/material';
import { EmployeeProfileDetailsDialog } from './EmployeeProfileDetails';
import { AlertNotificationService } from '../utils/AlertNotificationService';
import { finalize } from 'rxjs/operators';
import { debug } from 'util';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-employee-list',
    templateUrl: './Employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
    public readonly PAGE_SIZE = 10;
    errors: string;
    isRequesting: boolean;
    submitted: boolean = false;
    errorMessage: string;
    Employee: IEmployeeInterface[];
    editLink: string = "/employeeEdit";
    viewDetailsLink: string = "/employeeDetails"
    employee: IEmployeeInterface;
    query: any = {
        page: 1,
        pageSize: this.PAGE_SIZE,
        totalItems: 0,
        searchableColumn: "FullName,Email,Location",
        searchData: [],
    };
    columns = [ // String, Date, Number
        //{ key: 'username', dbKey: 'Username', title: 'USER NAME', isSortable: true, isSearchable: true, datatype: "String", value: "" },
        { key: 'fullName', dbKey: 'FullName', title: 'FULL NAME', isSortable: true, isSearchable: true, datatype: "String", value: "" },
        { key: 'email', dbKey: 'Email', title: 'EMAIL', isSortable: true, isSearchable: true, datatype: "String", value: "" },
        //{ key: 'designation', dbKey: 'Designation', title: 'DESIGNATION', isSortable: true, isSearchable: true, datatype: "String", value: "" },
        //{ key: 'department', dbKey: 'Department', title: 'DEPARTMENT', isSortable: true, isSearchable: true, datatype: "String", value: "" },
        //{ key: 'martialStatus', dbKey: 'MartialStatus', title: 'MARITAL STATUS', isSortable: true, isSearchable: false, datatype: "String", value: "" },
        { key: 'sex', dbKey: 'Sex', title: 'Gender', isSortable: true, isSearchable: false, datatype: "String", value: "" },
      { key: 'location', dbKey: 'Location', title: 'Address', isSortable: true, isSearchable: false, datatype: "String", value: "" },
      { key: 'primaryMobileNo', dbKey: 'PrimaryMobileNo', title: 'Mobile No:', isSortable: true, isSearchable: false, datatype: "String", value: "" },
      { key: 'employeeJoiningDate', dbKey: 'EmployeeJoiningDate', title: 'Joining Date', isSortable: true, isSearchable: true, datatype: "Date", value: "" },
        { key: 'isActive', dbKey: 'IsActive', title: 'ACTIVE STATUS', isSortable: true, isSearchable: false, datatype: "String", value: "" }
    ];

    EventButton = {
        EditButton: true,
        DeleteButton: true,
        ViewButton: true,
        ResetButton: true,
        CheckBoxColumn: false
    }
    displayVar: any = {};

    //CustomColumn = [{ htm: '<a (click)="Delete(data.id)"><i class="material-icons">delete</i></a>' }, {}];

    //CustomColumn =  [{Name: 'SendMail', Type: 'CheckBox'}] ;//[{}]
    constructor(private employeeService: EmployeeService, public dialog: MatDialog,
        private dialogService: DialogService,
        private router: Router,
        private notificationService: AlertNotificationService) {
        this.Employee = [];
        this.query.searchData = [];
        this.employee = {} as IEmployeeInterface
    }
  ngOnInit(): void {
    
        this.populateEmployee();
    }

    openDialog(employeeObj) {
        this.dialog.open(EmployeeProfileDetailsDialog, {
            data: {
                employee: employeeObj
            }
        });
    }
  public populateEmployee() {
        this.employeeService.getPagedEmployees(this.query).subscribe(Result => {
            this.Employee = <IEmployeeInterface[]>Result["data"],
            this.query.totalItems = Result["count"]
        });
     

    }

    deleteEmployee(id: number) {
        if (confirm("Are you sure you want to delete this employee?")) {
          this.employeeService.deleteEmployee(id)
            .pipe(finalize(() => this.isRequesting = false))
                .subscribe(
                result => {
                    if (result.result) {
                        this.populateEmployee();
                        //  this.router.navigate(['/employeeList']);
                        this.notificationService.openNotificationDialog(result.message, "Success");
                    }
                    else {
                        this.notificationService.openNotificationDialog(result.message, "Error");
                    }
                },
                errors => this.errors = errors);
        }
    }

    CheckIfDisplay(displayVar: any) {
        //
        if (displayVar.id > 3)
            this.displayVar.Display = false;
        else
            this.displayVar.Display = false;

    }
    SendAll($event) {
        var abc = this.columns;
        var def = this.Employee;
        var j = 0;
        for (var j = 0; j < 10; j++) {
            
            var isSelected = def[j].isSelected;
        }
    }
    ActionEvents(actionInputs: any) {
        console.log(actionInputs.id);
        if (actionInputs.Event == "delete") {
            console.log(actionInputs.id);
            if (confirm("Are you sure want to?")) {
                this.employeeService.deleteEmployee(actionInputs.id).subscribe(
                    result => {
                        if (result.result) {
                            this.notificationService.openNotificationDialog(result.message, "Success");
                            this.populateEmployee();
                            this.router.navigate(['/employeeList']);
                        }
                        else {
                            this.notificationService.openNotificationDialog(result.message, "Error");
                        }
                    },
                    error => {

                        this.notificationService.openNotificationDialog(error, "Error");
                    });
            }
        }
        else if (actionInputs.Event == "view") {
            this.employeeService.getEmployeeDetailsByID(actionInputs.id).subscribe(response => {
                this.employee = response;
                this.openDialog(this.employee);
            });

        }
        else if (actionInputs.Event == "reset") {

            this.employeeService.resetUserPassword(actionInputs.id).subscribe(response => {
                // this.openNotificationDialog("Password Reset Successfully", "Success")
                this.notificationService.openNotificationDialog("Password Reset Successfully", "Success")
            }, error => {
                this.notificationService.openNotificationDialog(error, "Error")
            });
        }
    }
}


