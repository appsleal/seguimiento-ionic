import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { DataTables } from 'src/app/interfaces/data-tables';
import { VisorService } from 'src/app/services/visor.service';

@Component({
  selector: 'app-list-expedients',
  templateUrl: './list-expedients.component.html',
  styleUrls: ['./list-expedients.component.scss'],
})
export class ListExpedientsComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  columnMode = ColumnMode;
  constructor(private service: VisorService) {
    this.service.getAll().subscribe((data: DataTables) => {
      this.rows = data.document;
      this.temp = [...data.document];
    });
  }

  ngOnInit() {}
}
