import { throwError } from 'rxjs';

export abstract class BaseService {
    constructor() { }

    protected handleError(error: any) {
        console.log(error);
        if (error.status != null) {
            if (error.status === 500) {
                return throwError(() => error);
            }
            const applicationError = error.headers?.get('Application-Error');
            if (applicationError) {
                return throwError(() => new Error(applicationError));
            }
            return throwError(() => new Error(error.statusText || 'Server error'));
        }
        return throwError(() => error);
    }
}

