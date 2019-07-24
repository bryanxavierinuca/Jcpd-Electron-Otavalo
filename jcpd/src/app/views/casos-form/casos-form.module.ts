import { CasosFormComponent } from './casos-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasosFormRoutingModule } from './casos-form-routing.module';

@NgModule({
  declarations: [CasosFormComponent],
  imports: [
    CommonModule,
    CasosFormRoutingModule
  ]
})
export class CasosFormModule { }
