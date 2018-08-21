import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployeeInterface } from '../Employee/Employee.Interface';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: IEmployeeInterface[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<IEmployeeInterface[]>(baseUrl + 'api/Employee').subscribe(result => {
      
      this.forecasts = result;
    }, error => console.error(error));
  }
}

//interface Employee {
//  firstName: string;
//  id: number;
//  primaryMobileNo: string;
//  lastName: string;
//}
