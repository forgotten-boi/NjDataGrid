import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';
//import { OnChanges } from '@angular/core';
import { ISearchField } from "../../app/njdatagrid/SearchField";
import { PaginationComponent } from '../../app/njdatagrid/pagination.component';
import { GridFilterComponent } from '../../app/njdatagrid/gridfilter.component';

import { jDataTableComponent } from '../../app/njdatagrid/JDataTable';


@Component({
    selector: 'jDataGrid',
    template: `
        <div class="row clearfix font-12">
            <gridfilter (populate)="populateData()" [columnsList]="columns" [query]="query"></gridfilter>
        </div>
        <div class="table-responsive font-12">
            <jDataTable [columnsList]="columns" [IconButton]="IconButton" [DisplayActionColumn]="DisplayActionColumn" (displayButton)="CheckIfDisplay($event)" [CustomColumnsList]="CustomColumn" [CheckIfValid]="display" (populate)="populateData()" [EventButton]="EventButton" (viewData)="View($event)" (deleteData)="deleteData($event)" [editLink]="editLink" [tableData]="DataList" [query]="query"></jDataTable>
        </div>
        <pagination (populate)="populateData()" [total-items]="query.totalItems" [page-size]="query.pageSize" (page-changed)="onPageChange($event)"></pagination>
`,

})

export class jDataGridComponent implements OnInit {//implements OnChanges {
    private readonly PAGE_SIZE = 10;

    serachField: ISearchField;
    serachFields: ISearchField[];

    @Input('editLink') editLink: any;
    @Input('columnsList') columns: any[];
    @Input('tableData') DataList: any[];
    @Output('populateData') populate = new EventEmitter();
    //@Output('DeleteData') DeleteData = new EventEmitter();
    @Output('ActionEvents') viewData = new EventEmitter();
    @Output('displayButton') displayButton = new EventEmitter();
    @Input('CustomColumnsList') CustomColumn: any[];
    @Input('IconButton') IconButton: any[];
    @Input('displayVar') display: any = {};
    @Output('Reset') Reset = new EventEmitter();
    @Input('total-items') totalItems;
    @Input('page-size') pageSize = 10;
    @Input('EventButton') EventButton: any[];
    @Input('DisplayActionColumn') DisplayActionColumn: boolean;
    //@Output('page-changed') pageChanged = new EventEmitter();

    pages: any[];

    currentPage = 1;

    @Input('query') query: any = {
        page: 1,
        pageSize: this.PAGE_SIZE,
        totalItems: 0,
        searchableColumn: "Username,FullName,Email,Department",
        searchData: []
    };

    //OnChanges() { }
    constructor() { }

    ngOnInit() {

    }

    onPageChange(page) {
        this.query.page = page;
        this.populateData();
    }

    private populateData() {
        this.populate.emit();
    }

    private CheckIfDisplay(id: number)
    {
        this.displayButton.emit(id);
        var abc = this.display;
    }

    //private deleteData(id: number)
    //{

    //    this.DeleteData.emit(id);
    //}

    private View(actionInput: any) {
        this.viewData.emit(actionInput);
    }
}

