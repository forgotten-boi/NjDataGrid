import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployeeInterface, Role } from './Employee.Interface';
import { ConfigService } from '../utils/config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
    baseUrl: string = '';

    constructor(private http: HttpClient, private configService: ConfigService) {
        this.baseUrl = configService.getApiURI();
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    saveEmployee(employee: IEmployeeInterface): Observable<any> {
        return this.http.post(
            this.baseUrl + 'Employee/CreateEmployee',
            employee,
            { headers: this.getHeaders() }
        );
    }

    resetUserPassword(id: number): Observable<any> {
        return this.http.post(
            this.baseUrl + 'api/Auth/ResetUserPasswordByAdmin?id=' + id,
            null,
            { headers: this.getHeaders() }
        );
    }

    getPagedEmployees(filter: any): Observable<any> {
        return this.http.post(
            this.baseUrl + 'Employee/GetPagedEmployee',
            filter,
            { headers: this.getHeaders() }
        );
    }

    toQueryString(obj: any): string {
        const parts: string[] = [];
        for (const property in obj) {
            const value = obj[property];
            if (value !== null && value !== undefined) {
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
            }
        }
        return parts.join('&');
    }

    getEmployeeByID(id: number): Observable<IEmployeeInterface> {
        return this.http.get<IEmployeeInterface>(this.baseUrl + 'Employee/GetEmployeeByID/' + id);
    }

    deleteEmployee(id: number): Observable<any> {
        return this.http.post(
            this.baseUrl + 'Employee/DeleteEmployee/?id=' + id,
            null,
            { headers: this.getHeaders() }
        );
    }

    GetSalaryMappedEmployeeList(flag: string, salaryMonth: number, fiscalId: number): Observable<IEmployeeInterface[]> {
        return this.http.get<IEmployeeInterface[]>(
            this.baseUrl + 'Employee/GetSalaryMappedEmployeeList?flag=' + flag + '&salaryMonth=' + salaryMonth + '&fiscalId=' + fiscalId
        );
    }

    getEmployeeDetailsByID(id?: number): Observable<IEmployeeInterface> {
        return this.http.get<IEmployeeInterface>(this.baseUrl + 'Employee/GetEmployeeDetailByID/' + id);
    }

    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(this.baseUrl + 'api/Roles/getallroles');
    }
}
