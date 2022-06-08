import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  navigate = [
    {
      title: 'Municipios',
      url: 'municipios',
    },
    {
      title: 'Usuarios',
      url: 'usuarios',
    },
  ];
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl('/admin/' + url);
  }

  ngOnInit() {}
}
