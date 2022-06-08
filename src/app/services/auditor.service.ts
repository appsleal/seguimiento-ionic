import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { DB_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuditorService {
  section = '/documentos';
  userToken = this.authService.getToken();

  headers = {
    'x-token': this.userToken,
  };

  constructor(
    private http: HttpClient,
    private toast: HotToastService,
    private authService: AuthService
  ) {}

  getListToValidate() {
    return this.http
      .get(DB_URL + this.section + '/validar', {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Lista de documentos disponibles para validar',
          error:
            'Error encontrado al obtener una lista de documentos disponible para validar',
        })
      );
  }

  getListValidated() {
    return this.http
      .get(DB_URL + this.section + '/validador', {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Lista de documentos validados',
          error:
            'Error encontrado al obtener una lista de documentos validados',
        })
      );
  }

  acceptFile(batch) {
    return this.http
      .post(
        DB_URL + this.section + '/validarDocumento',
        { json: batch },
        {
          headers: this.headers,
        }
      )
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Archivo validado correctamente',
          error:
            'Error encontrado al validar el archivo, por favor intente de nuevo',
        })
      );
  }

  rejectFile(json, comentarios) {
    return this.http
      .post(
        DB_URL + this.section + '/errorEnDocumento',
        {
          json,
          comentarios,
        },
        {
          headers: this.headers,
        }
      )
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Archivo rechazado correctamente',
          error:
            'Error encontrado al rechazar el archivo, por favor intente de nuevo',
        })
      );
  }
}
