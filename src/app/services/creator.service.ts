import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  constructor(private http: HttpClient, private toast: HotToastService) {}

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http
      .post('http://localhost:4001/api/documentos', formData)
      .pipe(
        this.toast.observe({
          loading: 'Espere un momento...',
          success: 'Archivo subido correctamente',
          error:
            'Error encontrado al subir el archivo, por favor intente de nuevo',
        })
      );
  }
}
