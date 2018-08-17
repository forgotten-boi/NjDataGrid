import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';
//import { OnChanges } from '@angular/core';
import { ISearchField } from "../../app/njdatagrid/SearchField";

//import { IEmployeeInterface } from "app/setup/Employee/Employee.Interface";
@Component({
    selector: 'jDataTable',
    template: `
        <table class="table table-bordered table-striped table-hover dataTable">
            <thead>
                <tr>
                    <th *ngFor="let c of columns">
                        <div style="cursor: pointer; cursor: hand;" *ngIf="c.isSortable" (click)="SortBy(c.dbKey)">
                            {{ c.title }}
                            <i *ngIf="query.sortBy === c.dbKey"
                                class="fa"
                                [class.fa-sort-asc]="query.isSortAscending"
                                [class.fa-sort-desc]="!query.isSortAscending"></i>
                        </div>
                        <div  *ngIf="!c.isSortable" width="9%" class="align-center">
                            {{ c.title }}
                        </div>
                    </th>
                    <th class="align-center"  *ngIf="DisplayActionColumn != false">
                        ACTION
                    </th>
                    <th *ngFor="let c of CustomColumn">
                    <!-- <th *ngIf="EventButton['CheckBoxColumn']">-->
                    <input type="checkbox" id='chkSelectAll' [(ngModel)]="selectedAll" (change)="selectAll();"/><label for="chkSelectAll">{{c.Name}}</label>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let data of DataList">
                    <td *ngFor="let column of columns; let i= index">
                        {{data[column.key]}}
                    </td>
                    <td *ngIf="DisplayActionColumn != false" class="align-center">
                        <a style="cursor: pointer; cursor: hand;"  *ngIf="EventButton['ResetButton']" title="Reset" (click)="ResetData(data.id)"><i class="material-icons">whatshot</i></a>
                        <!--   <span  *ngIf="Display(data.id, 'Approve')">
                        <a style="cursor: pointer; cursor: hand;"  title="Approve" (click)="Approve(data.id)"><i class="material-icons">thumb_up</i></a>
                        </span>
                        <span  *ngIf="Display(data.id, 'DisApprove')">
                        <a style="cursor: pointer; cursor: hand;"  title="DisApprove" (click)="DisApprove(data.id)"><i class="material-icons">thumb_up</i></a>
                        </span> -->
                        <!--Icon Button-->
                        <p *ngFor="let y of IconButton">
                            <span *ngIf="Display(data.id, y.Title)">
                                <a style="cursor: pointer; cursor: hand;" title="y.Title" (click)="IconButtonClick(data.id, y.Title)"><span class="{{y.Class}}">{{y.Title}}</span></a>
                            </span>
                        </p>
                        <a style="cursor: pointer; cursor: hand;" title="Delete"  *ngIf="EventButton['DeleteButton']" (click)="Delete(data.id)"><i class="material-icons">delete</i></a>
                        <a style="cursor: pointer; cursor: hand;" title="Edit" *ngIf="EventButton['EditButton']" [routerLink]="[editLink, data.id]"><i class="material-icons">edit</i></a>
                        <a style="cursor: pointer; cursor: hand;" title="View" *ngIf="EventButton['ViewButton']" (click)="View(data.id)"><i class="material-icons">description</i></a>
                    </td>
                    <td *ngFor="let c of CustomColumn">
                    <input *ngIf="c.Type=='CheckBox'" type="checkbox" id="chk+{{data.id}}" (change)="checkIfAllSelected()" name="isChecked" [(ngModel)]="data.isSelected"/><label for="chk+{{data.id}}"></label>
                    <!--   <span *ngFor="let column of CustomColumn; let i= index">
                    {{column.htm}}
                    </span>
                    -->    
                    </td>
                </tr>
            </tbody>
            <!--<tfoot><tr><th class="pull-right col-sm-2"><button (click)="SendAll($event)">SendAll</button></th></tr></tfoot> -->
        </table>
        <!--<div class="pull-right col-sm-2" *ngIf="EventButton['CheckBoxColumn']">
        <button class="btn btn-default" (click)="SendAll($event)">SendAll</button>
        </div> -->
`
})

export class jDataTableComponent implements OnInit {//implements OnChanges {
    private readonly PAGE_SIZE = 10;

    serachField: ISearchField;
    serachFields: ISearchField[];
    actionInputs: any = {};

    @Input('columnsList') columns: any[];
    @Input('editLink') editLink: string;
    @Input('tableData') DataList: any[];
    @Input('EventButton') EventButton: any[];
    @Output('populate') populate = new EventEmitter();
    //@Output('deleteData') deleteData = new EventEmitter();
    @Output('viewData') viewData = new EventEmitter();

    DecoyColumns: any[];

    @Output('displayButton') displayButton = new EventEmitter();
    @Input('CheckIfValid') display: any = {};
    @Input('CustomColumnsList') CustomColumn: any[];
    @Input('IconButton') IconButton: any[];
    @Output('Reset') Reset = new EventEmitter();
    @Input('DisplayActionColumn') DisplayActionColumn = true;

    idArray = [];
    i: number = 0;

    @Input('query') query: any = {
        pageSize: this.PAGE_SIZE,
        totalItems: 0,
        sortBy: '',
        //searchableColumn: "Username,FullName,Email,Department",
        searchData: []
    };

    //CustomColumn = [{ htm: '<a (click)="View(data.id)"><i class="material-icons">View</i></a>' }, { htm: '<a (click)="Preview(data.id)"><i class="material-icons">Preview</i></a>' }];
    HtmlCustomColumn: any[];
    //OnChanges() { }

    constructor() {
        this.query.sortBy = '';
    }

    ngOnInit() {

    }

    Display(id: number, eventName: string): boolean {
        var disP = false;
        //this.display = false;
        this.display.id = id;
        this.display.EventName = eventName;
        this.displayButton.emit(this.display)

        if (this.display == undefined || this.display == null)
        {
            return false;
        }

        disP = this.display.Display;
        this.idArray.push(id);

        return disP;
        //}
    }

    //SendAll($event) {
    //    debugger;
    //    var abc = this.columns;
    //    var def = this.DataList;
    //    var j = 0;
    //    for (var j = 0; j < 10; j++)
    //    {
    //        debugger;
    //        var isSelected = def[j].isSelected;
    //    }
    //}

    selectedAll: any;

    selectAll() {
        for (var i = 0; i < this.DataList.length; i++) {
            this.DataList[i].isSelected = this.selectedAll;
        }
    }

    checkIfAllSelected() {
        this.selectedAll = this.DataList.every(function (item: any) {
            return item.isSelected == true;
        })
    }

    SortBy(columnName) {
        //first ascending and then descending
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        } else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.populate.emit();
    }

    public Approve(id: number) {
        this.actionInputs.id = id;
        this.actionInputs.Event = "approve";
        this.viewData.emit(this.actionInputs);
        this.populate.emit();
        //this.deleteData.emit(id);
    }

    public DisApprove(id: number) {
        this.actionInputs.id = id;
        this.actionInputs.Event = "disapprove";
        this.viewData.emit(this.actionInputs);
        this.populate.emit();
        //this.deleteData.emit(id);
    }

    public IconButtonClick(id: number, eventName: Text)
    {
        this.actionInputs.id = id;
        this.actionInputs.Event = eventName;
        this.viewData.emit(this.actionInputs);
        this.populate.emit();
    }


    public Delete(id: number) {
        this.actionInputs.id = id;
        this.actionInputs.Event = "delete";
        this.viewData.emit(this.actionInputs);
        this.populate.emit();
        //this.deleteData.emit(id);
    }

    public View(id: number) {
        this.actionInputs.id = id;
        this.actionInputs.Event = "view";
        this.viewData.emit(this.actionInputs);
        //this.viewData.emit(id);
    }

    ResetData(id: number) {
        this.actionInputs.id = id;
        this.actionInputs.Event = "reset";
        this.viewData.emit(this.actionInputs);
        this.populate.emit();
    }

    resetFilter(id: number) {
        this.ClearSearchBox();
        this.ResetSearch();
        //this.deleteData.emit(id);
    }

    ClearSearchBox() {
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[i].value = "";
        }
    }

    ResetSearch() {
        this.query = {
            page: 1,
            //pageSize: this.PAGE_SIZE,
            searchData: []
        };
        this.serachFields = [];
    }
}
