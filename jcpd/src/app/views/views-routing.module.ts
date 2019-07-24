import { ViewsComponent } from './views.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: ViewsComponent,
    children: [
        { path: '', redirectTo: 'profile', pathMatch: 'prefix' },
        { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule'},
        { path: 'home', loadChildren: '../home/home.module#HomeModule' },
        { path: 'casos-form', loadChildren: './casos-form/casos-form.module#CasosFormModule' },
        { path: 'casos-list', loadChildren: './casos-list/casos-list.module#CasosListModule'}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
