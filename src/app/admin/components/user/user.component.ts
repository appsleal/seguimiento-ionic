import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaMunicipios } from 'src/app/interfaces/lista-municipios';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  formGroup: FormGroup;
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
  }

  createUser() {
    this.service.createUser(this.formGroup.value);
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rol: [0, [Validators.required]],
      municipio: [0, [Validators.required]],
    });
  }
}
