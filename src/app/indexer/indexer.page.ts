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
      title: 'Digitalizar documentos',
      url: 'create',
    },
    {
      title: 'Lista de documentos Disponibles',
      url: 'list-available',
    },
    {
      title: 'Lista de documentos Completados',
      url: 'list-completed',
    },

    {
      title: 'Lista de documentos Rechazados',
      url: 'list-rejected',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateTo(url: string) {
    this.router.navigateByUrl('/indexer/' + url);
  }
}
