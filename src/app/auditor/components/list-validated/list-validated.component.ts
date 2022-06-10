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

  ngOnInit() {}
}
