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
      title: 'Lista de documentos a validar',
      url: 'list-to-validate',
    },
    {
      title: 'Lista de documentos validados',
      url: 'list-validated',
    },
  ];
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl('/auditor/' + url);
  }

  ngOnInit() {}
}
