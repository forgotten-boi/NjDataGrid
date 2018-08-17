import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'EmployeeProfileDetails.html',
})
export class EmployeeProfileDetailsDialog {
    constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
      
    }
}
