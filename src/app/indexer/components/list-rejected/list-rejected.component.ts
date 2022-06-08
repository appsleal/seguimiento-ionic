/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { IndexerService } from 'src/app/services/indexer.service';

@Component({
  selector: 'app-list-rejected',
  templateUrl: './list-rejected.component.html',
  styleUrls: ['./list-rejected.component.scss'],
})
export class ListRejectedComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  columnMode = ColumnMode;

  constructor(private service: IndexerService) {
    this.service.getListRejected().subscribe((data) => {
      this.rows = data['document'];
      this.temp = [...data['document']];
    });
  }

  dateParse(date: string) {
    return new Date(date).toLocaleDateString();
  }

  ngOnInit() {}
}
