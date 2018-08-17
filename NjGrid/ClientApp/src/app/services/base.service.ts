
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
export abstract class BaseService {

    constructor() { }

    protected handleError(error: any) {

console.log(error);
        if (error.status != null || error.staus != undefined) {
            if (error.status == 500) {
                return Observable.throw(error);
            }
            return Observable.throw(error.statusText + "! " + error._body);
        }
        var applicationError = error.headers.get('Application-Error');

        // either applicationError in header or model error in body
        if (applicationError) {
            return Observable.throw(applicationError);
        }

        var modelStateErrors: string = '';
        var serverError = error.json();

        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(modelStateErrors || 'Server error');
    }


}

