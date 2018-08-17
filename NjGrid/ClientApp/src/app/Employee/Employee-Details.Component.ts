import { Component, Input, OnInit } from '@angular/core';
import { IEmployeeInterface } from './Employee.Interface';
import { EmployeeService } from './Employee.Service';

@Component({
    selector: 'employee-details',
    templateUrl: './Employee-Details.Component.html',

})
export class EmployeeDetailsComponent implements OnInit {
    employeeData: IEmployeeInterface;
    constructor(private employeeService: EmployeeService) {
        this.employeeData = {} as IEmployeeInterface;
    }
    ngOnInit() {
        this.employeeService.getEmployeeDetailsByID().subscribe(result => {
            this.employeeData = result
            var data = this.employeeData;
        }, error => {

        })

    }
}