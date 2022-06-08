/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { AuditorService } from 'src/app/services/auditor.service';
import { CreatorService } from 'src/app/services/creator.service';

@Component({
  selector: 'app-list-validated',
  templateUrl: './list-validated.component.html',
  styleUrls: ['./list-validated.component.scss'],
})
export class ListValidatedComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  columnMode = ColumnMode;

  constructor(private service: AuditorService) {
    this.service.getListValidated().subscribe((data) => {
      this.rows = data['document'];
      this.temp = [...data['document']];
    });
  }

  dateParse(date: string) {
    return new Date(date).toLocaleDateString();
  }

  ngOnInit() {}
}
