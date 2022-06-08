import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { DB_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IndexerService {
  // Can be moved to DB_URL
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

  digitalizeFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http
      .post(DB_URL + this.section + '/digitalizado', formData, {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Archivo digitalizado correctamente',
          error:
            'Error encontrado al digitalizar el archivo, por favor intente de nuevo',
        })
      );
  }

  getListAvailable() {
    return this.http
      .get(DB_URL + this.section + '/paraDigitalizar', {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Lista de documentos disponibles',
          error:
            'Error encontrado al obtener una lista de documentos disponible para digitalizar',
        })
      );
  }

  getListCompleted() {
    return this.http
      .get(DB_URL + this.section + '/digitalizador', {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Lista de documentos digitalizados',
          error:
            'Error encontrado al obtener la lista de documentos digitalizados por usted',
        })
      );
  }

  getListRejected() {
    return this.http.get(DB_URL + this.section + '/digitalizadorErrores', {
      headers: this.headers,
    });
  }
}
