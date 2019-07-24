import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    usu_id: 0,
    usu_nombre: '',
    usu_apellido: '',
    usu_cedula: '',
    usu_email: '',
    usu_password: '',
  };

  constructor(private auth: AuthenticationService, private router: Router) {}
  public isError =  false ;

  login(form: NgForm) {

    if (form.valid) {
      this.auth.login(this.credentials).subscribe(
        () => {
          this.router.navigateByUrl('/profile');
          this.isError = false;
        },
        err => {
          this.onIsError();
        }
      );

    } else {
      this.onIsError();
    }
  }
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
}
