import { PageHeaderComponent } from './../components/page-header/page-header.component';
import { CasosListComponent } from './casos-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasosListRoutingModule } from './casos-list-routing.module';

@NgModule({
  declarations: [CasosListComponent, PageHeaderComponent],
  imports: [
    CommonModule,
    CasosListRoutingModule
  ]
})
export class CasosListModule { }
