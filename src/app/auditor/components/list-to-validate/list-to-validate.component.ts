/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DatatableComponent,
  ColumnMode,
  SelectionType,
} from '@swimlane/ngx-datatable';
import { AuditorService } from 'src/app/services/auditor.service';

@Component({
  selector: 'app-list-to-validate',
  templateUrl: './list-to-validate.component.html',
  styleUrls: ['./list-to-validate.component.scss'],
})
export class ListToValidateComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  rejectionId: any;
  selected = [];
  modalController = false;

  formGroup: FormGroup;
  columnMode = ColumnMode;
  selectionType = SelectionType;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuditorService
  ) {
    this.service.getListToValidate().subscribe((data) => {
      this.rows = data['document'];
      this.temp = [...data['document']];
    });
  }

  dateParse(date: string) {
    return new Date(date).toLocaleDateString();
  }

  changeState = (id?) => {
    this.rejectionId = id;
    this.modalController = !this.modalController;
  };

  validateDocuments() {
    const selection: any[] = [];
    this.selected.forEach((element) => {
      selection.push(element.ID);
    });
    const json = JSON.stringify(selection);
    this.service.acceptFile(json).subscribe((_data) => {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    });
  }

  rejectDocuments() {
    const selection = this.formGroup.value.comment;
    const json = JSON.stringify(this.rejectionId);
    this.service.rejectFile(json, selection).subscribe((_data) => {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      comment: ['', [Validators.required]],
    });
  }
}
