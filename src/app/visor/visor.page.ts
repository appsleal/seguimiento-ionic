import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.page.html',
  styleUrls: ['./visor.page.scss'],
})
export class VisorPage implements OnInit {
  navigate = [
    {
      title: 'Lista de expedientes',
      url: 'list-expedients',
    },
    {
      title: 'Resumen Grafico',
      url: 'graphic-summary',
    },
  ];
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl('/visor/' + url);
  }
  getCurrentUrl(currentUrl: string) {
    const url = this.router.url;
    const subUrl = url.split('/')[2];

    return subUrl === currentUrl ? 'sideNav__active' : '';
  }

  ngOnInit() {}
}
