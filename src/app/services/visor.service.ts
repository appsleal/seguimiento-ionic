import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { DB_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VisorService {
  section = '/documentos';
  userToken = this.authService.getToken();

  headers = {
    'x-token': this.userToken,
  };

  constructor(private http: HttpClient,
    private toast: HotToastService,
    private authService: AuthService) { }

    getAll(){
      return this.http
        .get(DB_URL + this.section + '/all', {
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

    getCount() {
      return this.http
        .get(DB_URL + this.section + '/contar', {
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
