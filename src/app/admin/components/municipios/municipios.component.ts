import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ListaMunicipios } from 'src/app/interfaces/lista-municipios';
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
    this.service.getMunicipios().subscribe((data: ListaMunicipios) => {
      this.rows = data.municipio;
      this.temp = [...data.municipio];
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
    this.service.createMunicipio(this.formGroup.value).subscribe((_data) => {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      cuota: [0, [Validators.required]],
    });
  }
}
