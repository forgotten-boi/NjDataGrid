import { throwError } from 'rxjs';

export abstract class BaseService {
    constructor() { }

    protected handleError(error: any) {
        console.log(error);
        if (error.status != null) {
            if (error.status === 500) {
                return throwError(() => error);
            }
            return throwError(() => new Error(error.statusText));
        }
        return throwError(() => new Error('Server error'));
    }
}

