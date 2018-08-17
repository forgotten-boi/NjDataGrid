import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmployeeInterface, Role } from './Employee.Interface';

import { EmployeeService } from './Employee.Service';
import { NgForm, EmailValidator } from '@angular/forms';


//import '../../rxjs-operators';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { AlertNotificationService } from '../utils/AlertNotificationService';
import { finalize } from 'rxjs/operators';

enum Gender {
    Male = 1,
    Female = 2,
    Other = 3
}
enum EmployeeStatus {
    Permanent = 1,
    Resigned = 2,
    Temporary = 3,
    Contract = 4
}
@Component({
    selector: 'app-employee',
    templateUrl: './EmployeeDetails-add-details.Component.html',
    //styleUrls: ['./designation.component.css']
})

export class EmployeeAddDetailsComponent implements OnInit {
    options: string[];
    myValue: Gender;
    myEmployeeStatusValue: EmployeeStatus;
    GenderStatus: typeof Gender = Gender;
    IsMale: boolean;
    EmployeeStatusOptions: string[];
    EmployeeStatusValue: EmployeeStatus;
    employeeStatus: typeof EmployeeStatus = EmployeeStatus;
    isEdit: boolean = false;
    title = 'Add Employee';
    errors: string;
    isRequesting: boolean;
    submitted: boolean = false;
    errorMessage: string;
    status: string;
    id: number;
   
    employee: IEmployeeInterface;
    gd: string;
    routeLinks: any[];
    activeLinkIndex = -1;
    constructor(private setupService: EmployeeService,
        private alertNotificationService: AlertNotificationService,
        private router: Router,
        private route: ActivatedRoute,
       
        private dialog: MatDialog) {
        this.employee = {} as IEmployeeInterface;
     
        this.status = "ADD";
        this.routeLinks = [
            {
                label: 'Add-Employee',
                link: '/employeeAdd',
                index: 0
            }, {
                label: 'Employee Salary Add',
                link: '/employeesalaryadd',
                index: 1
            }
        ];
    }
    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.index === 0 + this.router.url));
        });
        var x = this.GenderStatus;
        var options = Object.keys(this.GenderStatus);
        this.options = options.slice(options.length / 2);

        var y = this.employeeStatus;
        var empoptions = Object.keys(this.employeeStatus);
        this.EmployeeStatusOptions = empoptions.slice(empoptions.length / 2);

        let id = +this.route.snapshot.params['id'];
        if (id) {
            this.getEmployeeByID(id);
        }
        //this.setupService.getRoles().subscribe(
        //    response => this.role = response,
        //    error => this.errors = error
        //);
        //this.getMaritalStatus();
        //this.getDepartments();
        //this.getDesignation();
    }

    parseValue(value: string) {
        this.gd = value;
        this.myValue = this.GenderStatus[value];
        // this.employee.sex = this.myValue;
        this.IsMale = this.myValue == this.GenderStatus.Male;
    };

    parseValueEmployee(value: string) {
        this.gd = value;
        this.employeeStatus = this.employeeStatus[value];
    }
   
    saveEmployee({ valid }: { valid: boolean }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.setupService.saveEmployee(this.employee)
                .pipe(finalize(() => this.isRequesting = false))
                .subscribe(
                result => {
                    if (result.result) {
                        this.router.navigate(['/employeeList']);
                        this.alertNotificationService.openNotificationDialog(result.message, "Success");

                    }
                    else {
                        this.alertNotificationService.openNotificationDialog(result.message, "Error");

                    }
                },
                error => this.errors = error);
        }
    }

    getEmployeeByID(id) {
        this.status = "EDIT";
        this.isEdit = true;
        this.title = 'Edit Employee';

        this.setupService.getEmployeeByID(id).subscribe(
            response => {
                this.employee = response,
                    error => this.errors = <any>error

                var jdDate = this.employee.joiningDate.toLocaleString();
                jdDate = jdDate.replace('at ', '');
                this.employee.joiningDate = new Date(jdDate);

                var dobDate = this.employee.dob.toLocaleString();
                dobDate = dobDate.replace('at ', '');
                this.employee.dob = new Date(dobDate);

                return;
            });
    }
}
