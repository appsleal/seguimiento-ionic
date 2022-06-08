/* eslint-disable @typescript-eslint/dot-notation */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { DB_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  section = '/user';

  constructor(
    private http: HttpClient,
    private toast: HotToastService,
    private router: Router
  ) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  login(user) {
    this.http
      .post(DB_URL + this.section + '/login', user)
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Ingresado exitosamente',
          error: 'Error encontrado al ingresar, por favor intente de nuevo',
        })
      )
      .subscribe(
        (res) => {
          if (res['token']) {
            this.setToken(res['token']);
            this.router.navigateByUrl('/main-page');
          } else {
            this.toast.error('correo contraseña errada');
          }
        },
        (err) => {
          this.toast.error('correo contraseña errada');
        }
      );
  }
}
