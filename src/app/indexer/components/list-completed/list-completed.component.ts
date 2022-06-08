/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { IndexerService } from 'src/app/services/indexer.service';

@Component({
  selector: 'app-list-completed',
  templateUrl: './list-completed.component.html',
  styleUrls: ['./list-completed.component.scss'],
})
export class ListCompletedComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  columnMode = ColumnMode;

  constructor(private service: IndexerService) {
    this.service.getListCompleted().subscribe((data) => {
      this.rows = data['document'];
      this.temp = [...data['document']];
    });
  }

  dateParse(date: string) {
    return new Date(date).toLocaleDateString();
  }

  ngOnInit() {}
}
