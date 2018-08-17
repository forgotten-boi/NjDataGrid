import { PaginationComponent } from '../njdatagrid/pagination.component';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { IEmployeeInterface, Role } from './Employee.Interface';
import { ConfigService } from '../utils/config.service';
//import { BaseService } from '../services/base.service';

//import { PaginatedResult, Pagination } from '../../shared/Interfaces';
//import { ItemsService } from '../utils/ItemsService';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../services/base.service';

@Injectable()
export class EmployeeService extends BaseService {
    baseUrl: string = '';
    constructor(private http: Http,
        private configService: ConfigService,
        //private itemsService: ItemsService,
    ) {
        super();
        this.baseUrl = configService.getApiURI();
    }
    saveEmployee(employee: IEmployeeInterface): Observable<any> {
        let headers = new Headers();
        var data = JSON.stringify(employee);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
      return this.http
        .post(
          this.baseUrl + 'Employee/CreateEmployee', data, options
        )
        .pipe(map(res => res.json()))
        .pipe(map(res => {
          var ress = res;
          return res;
        }));
            //.catch(this.handleError));
    }
    resetUserPassword(id: number): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http
          .post(
            this.baseUrl + 'api/Auth/ResetUserPasswordByAdmin?id=' + id, options
          ).
          pipe(map(res => {
            return res;
          }));
            //.catch(this.handleError);
    }

    getEmployee(): Observable<IEmployeeInterface[]> {
        return this.http.get(this.baseUrl + 'Employee/GetAllEmployee').pipe(map((response: Response) => {
            var result = <IEmployeeInterface[]>response.json();
            return result;
        }))
            //.catch(this.handleError);
    }

    getEmployeeForSalaryMapping(): Observable<IEmployeeInterface[]> {
      return this.http.get(this.baseUrl + 'Employee/GetEmployeeForSalaryMapping').pipe(map((response: Response) => {
        var result = <IEmployeeInterface[]>response.json();
        return result;
      }));
            //.catch(this.handleError);
    }

  getPagedEmployees(filter): Observable<IEmployeeInterface[]> {
    debugger;
        let headers = new Headers();
        var data = JSON.stringify(filter);
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl + 'Employee/GetPagedEmployee', data, options)
        .pipe(map((response: Response) => {
          var result = <IEmployeeInterface[]>response.json();
          return result;
        }));
            //.catch(this.handleError);
    }

    toQueryString(obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined) {
                parts.push(encodeURIComponent(property) + "=" + encodeURIComponent(value));
            }
        }
        return parts.join('&');
    }

    getEmployeeByID(id: number): Observable<IEmployeeInterface> {
      return this.http.get(this.baseUrl + 'Employee/GetEmployeeByID/' + id)
        .pipe(map((res: Response) => {
          return res.json();
        }));
            //.catch(this.handleError);
    }

    deleteEmployee(id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
      return this.http.post(this.baseUrl + 'Employee/DeleteEmployee/?id=' + id, headers)
        .pipe(map((res: Response) => {
          return res.json();
        }));
            //.catch(this.handleError);
    }
    GetSalaryMappedEmployeeList(flag: string, salaryMonth: number, fiscalId: number): Observable<IEmployeeInterface[]> {
        return this.http.get(this.baseUrl + 'Employee/GetSalaryMappedEmployeeList?flag=' + flag + "&salaryMonth=" + salaryMonth + "&fiscalId=" + fiscalId).pipe(map((response: Response) => {
            var result = <IEmployeeInterface[]>response.json();
            return result;
      }));
            //.catch(this.handleError);
    }

    getEmployeeDetailsByID(id?: number): Observable<IEmployeeInterface> {
      return this.http.get(this.baseUrl + 'Employee/GetEmployeeDetailByID/' + id)
        .pipe(map((res: Response) => {
          return res.json();
        }));
            //.catch(this.handleError);
    }
    getRoles(): Observable<Role[]> {
      return this.http.get(this.baseUrl + 'api/Roles/getallroles')
        .pipe(map((res: Response) => {
          return <Role[]>res.json();
        }));
            //.catch(this.handleError);
    }
}
