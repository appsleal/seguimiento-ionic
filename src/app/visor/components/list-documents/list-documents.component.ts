import { Component, OnInit, ViewChild } from '@angular/core';
import { VisorService } from 'src/app/services/visor.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss'],
})
export class ListDocumentsComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  columnMode = ColumnMode;
  constructor(private service:VisorService) { 

    this.service.getAll().subscribe((data)=>{
      this.rows = data['document'];
      this.temp = [...data['document']];
    })
  }

  ngOnInit() {}

}
