import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
  styles: []
})
export class ViewsComponent implements OnInit {
  title = 'jcpd';
  collapedSideBar: boolean;

  constructor() {}
  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}
  ngOnInit() {
  }

}
