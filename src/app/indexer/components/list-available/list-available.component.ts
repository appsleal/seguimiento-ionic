/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { CreatorService } from 'src/app/services/creator.service';
import { IndexerService } from 'src/app/services/indexer.service';

@Component({
  selector: 'app-list-available',
  templateUrl: './list-available.component.html',
  styleUrls: ['./list-available.component.scss'],
})
export class ListAvailableComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  columnMode = ColumnMode;

  constructor(private service: IndexerService) {
    this.service.getListAvailable().subscribe((data) => {
      this.rows = data['document'];
      this.temp = [...data['document']];
    });
  }

  dateParse(date: string) {
    return new Date(date).toLocaleDateString();
  }

  ngOnInit() {}
}
