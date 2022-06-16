import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { DB_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
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

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http
      .post(DB_URL + this.section, formData, {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Archivo subido correctamente',
          error:
            'Error encontrado al subir el archivo, por favor intente de nuevo',
        })
      );
  }

  createfile(batch) {
    return this.http
      .post(
        DB_URL + this.section,
        batch ,
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

  getFiles() {
    return this.http
      .get(DB_URL + this.section, {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Archivos obtenidos correctamente',
          error:
            'Error encontrado al obtener los archivos, por favor intente de nuevo',
        })
      );
  }

  getFilesDoc() {
    return this.http
      .get(DB_URL + this.section+"/generar", {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Archivos obtenidos correctamente',
          error:
            'Error encontrado al obtener los archivos, por favor intente de nuevo',
        })
      );
  }

  getFilesDocFecha(date) {
    return this.http
      .post(DB_URL + this.section+"/generarFecha",{
        "date":date
      }, {
        headers: this.headers,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Archivos obtenidos correctamente',
          error:
            'Error encontrado al obtener los archivos, por favor intente de nuevo',
        })
      );
  }
}
