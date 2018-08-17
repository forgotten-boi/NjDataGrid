import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    _apiURI : string;
 
    constructor() {
        this._apiURI = '/api/';
     }
 
     getApiURI() {
         return this._apiURI;
    }    

     public static REPORTSERVER_ENDPOINT = 'http://10.0.1.246:2000/ReportViewer.aspx?objValue=';
     public static INVENTORY_REPORTSERVER_ENDPOINT = 'http://10.0.1.246:2000/InventoryReport.aspx?objValue=';

     public static noRowFound= "NO DATA FOUND";
}
