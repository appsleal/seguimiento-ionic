import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { ListaMunicipios } from 'src/app/interfaces/lista-municipios';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows: any[] = [];
  temp: any[] = [];
  modalController = false;

  formGroup: FormGroup;
  columnMode = ColumnMode;
  municipios: any;

  roles = [
    {
      id: 0,
      nombre: 'Administrador',
    },
    {
      id: 1,
      nombre: 'Creador',
    },
    {
      id: 2,
      nombre: 'Digitalizador',
    },
    {
      id: 3,
      nombre: 'Validador',
    },
    {
      id: 4,
      nombre: 'Visor',
    },
  ];

  constructor(private formBuilder: FormBuilder, private service: AdminService) {
    this.service.getMunicipios().subscribe((data: ListaMunicipios) => {
      this.municipios = [...data.municipio];
      console.log({
        municipios: this.municipios,
      });
    });

    this.service.listUser().subscribe((data: any) => {
      this.rows = data;
      this.temp = [...data];
    });
  }

  changeState = () => {
    this.modalController = !this.modalController;
  };
  createUser() {
    this.service.createUser(this.formGroup.value).subscribe((_data) => {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      correo: [
        '',
        [Validators.required],
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ],
      password: ['', [Validators.required]],
      rol: [0, [Validators.required]],
      municipio: [0, [Validators.required]],
    });
  }
}
