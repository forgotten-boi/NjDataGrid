import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AlertModel {
    title: string;
    message: string;
}

@Component({
    standalone: false,
    selector: 'alert',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <h4 class="modal-title">{{data.title || 'Alert!'}}</h4>
                   </div>
                   <div class="modal-body">
                     <p>{{data.message || 'TADAA-AM!'}}</p>
                   </div>
                </div>
             </div>`
})
export class AlertComponent implements AlertModel {
    title: string;
    message: string;
    constructor(@Inject(MAT_DIALOG_DATA) public data: AlertModel) {
        this.title = data.title;
        this.message = data.message;
    }
}
