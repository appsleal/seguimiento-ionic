import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss'],
})
export class MunicipiosComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows = [];
  temp = [];
  columnMode = ColumnMode;
  columns = [{ prop: 'Id' }, { name: 'Nombre Municipio' }];
  constructor(public routerOutlet: IonRouterOutlet, private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigateByUrl('/admin');
  }
}
