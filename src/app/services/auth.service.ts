import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { DB_URL } from 'src/environments/environment';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';
import { LoginToken, TokenDecoded } from '../interfaces/TokenDecoded';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  section = '/user';
  jwtHelper = new JwtHelperService();

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

  getRol() {
    const token = localStorage.getItem('token') ?? '';
    const decoded: TokenDecoded = jwt_decode(token);

    return decoded.usuario.rol ?? decoded.usuario.username.rol;
  }

  getUser() {
    const token = localStorage.getItem('token') ?? '';
    const decoded: TokenDecoded = jwt_decode(token);

    return decoded.usuario.username.usuario;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') ?? '';
    // Check whether the token is expired and return
    // true or false

    return !this.jwtHelper.isTokenExpired(token);
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
        (res: LoginToken) => {
          if (res.token) {
            this.setToken(res.token);
            this.router.navigateByUrl('/admin');
          } else {
            this.toast.error('correo contraseña errada');
          }
        },
        (err) => {
          this.toast.error('correo contraseña errada');
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  sessionHandler() {
    if (!this.isAuthenticated()) {
      this.router.navigateByUrl('/');
    }
  }
}
