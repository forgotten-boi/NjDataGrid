import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';
import { OnChanges } from '@angular/core';
import { ISearchField } from "../../app/njdatagrid/SearchField";

//import { IEmployeeInterface } from "app/setup/Employee/Employee.Interface";
@Component({
    selector: 'gridfilter',
    template: `
        <div class="form-group row">
            <div class="col-sm-12  well">
                <div class="header">
                    <label>Search Sections</label>
                </div>
                <div class=" body">
                    <ul>
                        <li style="margin-bottom: 0;" class="col-sm-2" *ngFor="let m of columns; let i = index;">
                            <div *ngIf="m.isSearchable" style="margin-left:5px;">
                                <input type="text" id="{{m.dbKey}}" class="pull-left" (change)="onFilterChange()" placeholder="Enter {{m.title}}" [(ngModel)]="columns[i].value">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-2 pull-right">
                <select name="Username" id="make" class="custom-select mb-2 mr-sm-2 mb-sm-0 pull-right show" [(ngModel)]="query.pageSize" (change)="onPageSizeChange()">
                    <option value="1">1</option>
                        <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        </div>
        <!--<div class="form-group">
            <button class="btn btn-danger waves-effect" (click)="resetFilter($event)">Reset</button>
        </div> -->
`
})

export class GridFilterComponent implements OnChanges { //implements OnInit {
    private readonly PAGE_SIZE = 10;

    serachField: ISearchField;
    serachFields: ISearchField[];

    @Input('columnsList') columns: any[];

    //@Input('page-size') pageSize = 10;
    //@Output('filter-changed') filterChanged = new EventEmitter();
    //@Output('pagesize-changed') pagesizeChanged = new EventEmitter();
    @Output() populate = new EventEmitter();

    @Input('query') query: any = {
        page: 1,
        pageSize: this.PAGE_SIZE,
        totalItems: 0,
        searchableColumn: "Username,FullName,Email,Department",
        searchData: []
    };

    //OnChanges() { }
    constructor() { }
    //ngOnInit() { }

    ngOnChanges() {
        this.onFilterChange();
    }

    onFilterChange() {
        //   this.ResetSearch();
        this.query.page = 1;
        this.query.searchData = this.GetSearchBoxData();
        this.populate.emit();
    }

    GetSearchBoxData() {
        this.query.searchData = [];
        this.serachFields = [];
        for (var i = 0; i < this.columns.length; i++) {
            if (this.columns[i].value != "" && this.columns[i].value != undefined && this.columns[i].isSearchable == true) {
                this.serachField = {} as ISearchField;
                this.serachField.dbKey = this.columns[i].dbKey;
                this.serachField.value = this.columns[i].value;
                this.serachField.datatype = this.columns[i].datatype;
                this.serachFields.push(this.serachField);
            }
        }
        return this.serachFields;
    }

    onPageSizeChange() {
        //this.query.searchData = null;
        this.onFilterChange();
    }

    //private populateEmployee() {

    //    this.employeeService.getPagedEmployees(this.query).subscribe(Result => {
    //        this.Employee = <IEmployeeInterface[]>Result["data"],
    //            this.query.totalItems = Result["count"]
    //    });
    //}
    //onPageChange(page) {
    //    this.query.page = page;
    //    this.populateEmployee();
    //}

    //SortBy(columnName) {
    //    //first ascending and then descending
    //    if (this.query.sortBy === columnName) {
    //        this.query.isSortAscending = !this.query.isSortAscending;
    //    } else {
    //        this.query.sortBy = columnName;
    //        this.query.isSortAscending = true;
    //    }
    //    this.populate.emit();
    //}

    resetFilter() {
        this.ClearSearchBox();
        this.serachFields = [];
        this.ResetSearch();
        this.onFilterChange();
        //this.query.searchData= [];
        this.populate.emit();
    }

    ClearSearchBox() {
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[i].value = "";
        }
    }

    ResetSearch() {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE,
            searchData: []
        };
        this.serachFields = [];
    }
}
