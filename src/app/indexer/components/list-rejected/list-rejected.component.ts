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


  changeState(id){
    this.service.arreglar(id).subscribe((data) => {
      setTimeout(() => {
        window.location.reload();
      }, 800);
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
  ngOnInit() {}
}
