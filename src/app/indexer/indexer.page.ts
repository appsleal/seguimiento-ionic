import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexer',
  templateUrl: './indexer.page.html',
  styleUrls: ['./indexer.page.scss'],
})
export class IndexerPage implements OnInit {
  navigate = [
    {
      title: 'Digitalizar expedientes',
      url: 'create',
    },
    {
      title: 'Lista de expedientes Disponibles',
      url: 'list-available',
    },
    {
      title: 'Lista de expedientes Completados',
      url: 'list-completed',
    },

    {
      title: 'Lista de expedientes Rechazados',
      url: 'list-rejected',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateTo(url: string) {
    this.router.navigateByUrl('/indexer/' + url);
  }

  getCurrentUrl(currentUrl: string) {
    const url = this.router.url;
    const subUrl = url.split('/')[2];

    return subUrl === currentUrl ? 'sideNav__active' : '';
  }
}
