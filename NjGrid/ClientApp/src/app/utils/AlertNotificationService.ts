import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
//import { AlertDialogComponent } from '../../../app/AlertDialogComponent';
import { Injectable } from '@angular/core';
import { AlertDialogComponent } from '../AlertDialogComponent';
@Injectable()
export class AlertNotificationService {
   
    constructor(private dialog: MatDialog) { }
    openNotificationDialog(message: string, type: string) {
        this.dialog.open(AlertDialogComponent, {
            data: {
                title: type,
                notificationmessage: message
            }
        });
    }

    /*
    Prints a success message using the alertify.js lib
    */
    printSuccessMessage(message: string) {

      //  this._notifier.success(message);
    }

    /*
    Prints an error message using the alertify.js lib
    */
    printErrorMessage(message: string) {
      //  this._notifier.error(message);
    }
}
