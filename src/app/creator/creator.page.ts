import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatorService } from '../services/creator.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.page.html',
  styleUrls: ['./creator.page.scss'],
})
export class CreatorPage implements OnInit {
  navigate = [
    {
      title: 'Creador de documentos',
      url: 'create',
    },
    {
      title: 'Lista de documentos creados',
      url: 'list',
    },
  ];
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl('/creator/' + url);
  }
  getCurrentUrl(currentUrl: string) {
    const url = this.router.url;
    const subUrl = url.split('/')[2];

    return subUrl === currentUrl ? 'sideNav__active' : '';
  }
  ngOnInit() {}
}
