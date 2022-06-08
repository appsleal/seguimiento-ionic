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
      title: 'Lista de documentos',
      url: 'list-documents',
    },
    {
      title: 'Diagrama de Pastel',
      url: 'pie-chart',
    },
  ];
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl('/visor/' + url);
  }

  ngOnInit() {}
}
