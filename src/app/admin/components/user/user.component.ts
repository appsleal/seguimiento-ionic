import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService
  ) {}

  createUser() {
    console.log({
      user: this.formGroup.value.usuario,
    });
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
