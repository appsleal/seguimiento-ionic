import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auditor',
  templateUrl: './auditor.page.html',
  styleUrls: ['./auditor.page.scss'],
})
export class AuditorPage implements OnInit {
  navigate = [
    {
      title: 'Lista de expedientes a validar',
      url: 'list-to-validate',
    },
    {
      title: 'Lista de expedientes validados',
      url: 'list-validated',
    },
  ];
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl('/auditor/' + url);
  }
  getCurrentUrl(currentUrl: string) {
    const url = this.router.url;
    const subUrl = url.split('/')[2];

    return subUrl === currentUrl ? 'sideNav__active' : '';
  }

  ngOnInit() {}
}
