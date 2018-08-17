// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  

import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { PaginationComponent } from './pagination.component';
import { GridFilterComponent } from './gridfilter.component';
import { TableHeaderComponent } from './tableheader.component';
import { jDataTableComponent } from './JDataTable';
import { jDataGridComponent } from './jDataGrid';
//import { jDataGridComponent } from 'JDataGrid';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ],
    declarations: [PaginationComponent, GridFilterComponent, jDataTableComponent, jDataGridComponent],
    exports: [PaginationComponent, GridFilterComponent, jDataTableComponent, jDataGridComponent],
  providers:    []
})
export class CommonGridModule {
}
