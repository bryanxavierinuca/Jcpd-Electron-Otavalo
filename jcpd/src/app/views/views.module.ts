
import { HeaderComponent } from './components/header/header.component';
import { ViewsComponent } from './views.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [ViewsComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
