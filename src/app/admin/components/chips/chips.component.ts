import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { Chips } from 'src/app/interfaces/chips';
import {
  ListaMunicipios,
  Municipio,
} from 'src/app/interfaces/lista-municipios';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  municipios: any;
  modalController = false;

  formGroup: FormGroup;
  columnMode = ColumnMode;

  private file: File;

  constructor(private formBuilder: FormBuilder, private service: AdminService) {
    this.service.getMunicipios().subscribe((data: ListaMunicipios) => {
      this.municipios = [...data.municipio];
    });
    this.service.listChip().subscribe((data: Chips) => {
      this.rows = data.chips;
      this.temp = [...data.chips];
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  changeState = () => {
    this.modalController = !this.modalController;
  };

  municipioParse(municipioID: number) {
    const index = this.municipios.find(
      (municipio) => municipio.ID === municipioID
    );
    if (index) {
      return index.NOMBRE;
    } else {
      return '';
    }
  }

  uploadChip() {
    const formData = new FormData();

    formData.append('file', this.file, this.file.name);
    formData.append('municipio', this.formGroup.value.municipio);

    console.log({
      municipio: this.formGroup.value.municipio,
      file: this.file,
      formData,
    });

    this.service.uploadChip(formData).subscribe((_data) => {
      // setTimeout(() => {
      //   window.location.reload();
      // }, 800);
    });
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      municipio: [0, [Validators.required]],
    });
  }
}
