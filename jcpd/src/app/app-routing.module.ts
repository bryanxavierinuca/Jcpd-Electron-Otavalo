import { AuthGuardService } from './services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', loadChildren: './views/views.module#ViewsModule', canActivate: [AuthGuardService] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }

    /* { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'casos-list',
      component: CasosListComponent ,
      canActivate: [AuthGuardService]
    },
    {
      path: 'casos-form',
      component: CasosFormComponent,
      canActivate: [AuthGuardService]
    } */
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
