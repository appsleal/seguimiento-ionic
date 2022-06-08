import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  navigate: any;

  constructor() {
    this.sideMenu();
  }

  ngOnInit() {}

  sideMenu() {
    this.navigate = [
      {
        title: 'App',
        url: '/apps',
        icon: 'apps',
      },
      {
        title: 'Book',
        url: '/book',
        icon: 'book',
      },
      {
        title: 'Paint',
        url: '/paint',
        icon: 'brush',
      },
      {
        title: 'Contacts',
        url: '/contacts',
        icon: 'contacts',
      },
      {
        title: 'Facebook',
        url: '/facebook.com',
        icon: 'logo-facebook',
      },
    ];
  }
}
