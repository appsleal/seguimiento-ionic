/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { CreatorService } from 'src/app/services/creator.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  columnMode = ColumnMode;

  constructor(private service: CreatorService) {
    this.service.getFiles().subscribe((data) => {
      this.rows = data['document'];
      this.temp = [...data['document']];
    });
  }

  // filters results
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(
      (d) => String(d.numero_documento).indexOf(val) !== -1 || !val
    );

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  dateParse(date: string) {
    return new Date(date).toLocaleDateString();
  }

  ngOnInit() {}
}
