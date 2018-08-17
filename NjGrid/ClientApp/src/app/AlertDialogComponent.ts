import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'alert-dialog',
    templateUrl: 'AlertDialogComponent.html',
})

export class AlertDialogComponent {
    constructor( @Inject(MAT_DIALOG_DATA) public data: any) {

    }
}
