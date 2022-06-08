/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss'],
})
export class MunicipiosComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  modalController = false;

  formGroup: FormGroup;
  columnMode = ColumnMode;

  constructor(private formBuilder: FormBuilder, private service: AdminService) {
    this.service.getMunicipios().subscribe((data) => {
      console.log({
        data,
      });
      this.rows = data['municipio'];
      this.temp = [...data['municipio']];
    });
  }

  changeState = () => {
    this.modalController = !this.modalController;
  };
  dateParse(date: string) {
    return new Date(date).toLocaleDateString();
  }

  deleteMunicipio(id) {
    this.service.deleteMunicipio(id).subscribe((_data) => {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    });
  }

  createMunicipio() {
    console.log({
      name: this.formGroup.value.name,
    });
    this.service
      .createMunicipio(this.formGroup.value.name)
      .subscribe((_data) => {
        setTimeout(() => {
          window.location.reload();
        }, 800);
      });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
}
