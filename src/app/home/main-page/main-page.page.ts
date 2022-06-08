import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  rol = 0;

  rows = [];

  temp = [];

  columns = [{ prop: 'numero_documento' }, { name: 'numero_carpeta' }, { name: 'numero_carpeta' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;


  constructor(private storage: Storage,private http: HttpClient) {}
  ngOnInit() {
    this.init();
  }
  private file: File;

  async init() {
    const token = await this.storage.get('token');
    const decodetoken = await this.getDecodedAccessToken(token);
    this.rol = decodetoken.usuario.rol;

    this.http.get('http://localhost:4001/api/documentos/paraDigitalizar').subscribe(res=>{
      this.temp=[...res["document"]]
      this.rows=res["document"]
    })
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  async submitForm() {
    let formData = new FormData();
    formData.append("file", this.file, this.file.name);
    this.http.post("http://localhost:4001/api/documentos", formData).subscribe((response) => {
      console.log(response);
    });
    
  }
}
