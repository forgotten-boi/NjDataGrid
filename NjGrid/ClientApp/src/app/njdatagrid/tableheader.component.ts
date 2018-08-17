import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';

@Component({
    selector: 'tblHeader',
    template: `<thead>
                                <tr>
    
                                    <th *ngFor="let c of columns">
                                        <div *ngIf="c.isSortable" (click)="SortBy(c.key)">
                                            {{ c.title }}
                                            <i *ngIf="query.sortBy === c.key"
                                               class="fa"
                                               [class.fa-sort-asc]="query.isSortAscending"
                                               [class.fa-sort-desc]="!query.isSortAscending"></i>
                                        </div>
                                        <div *ngIf="!c.isSortable">
                                            {{ c.title }}
                                        </div>
                                    </th> </tr>

</thead>
                            
`
})


export class TableHeaderComponent implements OnInit {//implements OnChanges {
    private readonly PAGE_SIZE = 10;

    @Input('columnsList') columns: any[];

    @Input('query') query: any = {
        page: 1,
        pageSize: this.PAGE_SIZE,
        totalItems: 0,
        searchableColumn: "Username,FullName,Email,Department",

        searchData: []
    };

    @Output() populate = new EventEmitter();

    //@Input('page-size') pageSize = 10;
    //@Output('filter-changed') filterChanged = new EventEmitter();
    constructor() { }

    ngOnInit() { }

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

}

