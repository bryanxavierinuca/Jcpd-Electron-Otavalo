import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  templateUrl: './home.component.html',
  animations: [routerTransition()]
})
export class HomeComponent {}
