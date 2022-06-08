/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { DB_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient, private toast: HotToastService) {}

  getMunicipios() {
    return this.http.get(DB_URL + '/municipios').pipe(
      this.toast.observe({
        loading: 'Espere un momento...',
        success: 'Se ha obtenido la Lista de municipios correctamente',
        error: 'Error encontrado al obtener la lista de municipios',
      })
    );
  }

  createMunicipio(municipio) {
    return this.http
      .post(DB_URL + '/municipios', {
        NOMBRE: municipio,
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Se ha creado el municipio correctamente',
          error: 'Error encontrado al intentar crear un municipio',
        })
      );
  }

  deleteMunicipio(id) {
    return this.http
      .delete(DB_URL + '/municipios', {
        body: {
          ID: id,
        },
      })
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Se ha eliminado el municipio correctamente',
          error: 'Error encontrado al intentar eliminar un municipio',
        })
      );
  }

  createUser(user) {
    return this.http.post(DB_URL + '/user' + '/create', user).pipe(
      this.toast.observe({
        loading: 'Espere un momento...',
        success: 'Se ha creado el usuario correctamente',
        error: 'Error encontrado al intentar crear un usuario',
      })
    );
  }
}
