import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jcpd';
  collapedSideBar: boolean;

  constructor() {}
  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}
}
