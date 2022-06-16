import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChipsService {
  labelAttribute = 'numero_sim';
  public objects: any[] = [];
  userToken = this.authService.getToken();

  headers = {
    'x-token': this.userToken,
  };

  constructor(private http: HttpClient, private authService: AuthService) {
    this.cargar();
    
  }

  cargar() {
    this.http.get("http://localhost:4001/api/chips",{
      headers: this.headers,
    }).subscribe(res => {
      this.objects = res["chips"];
    })
  }

  getSerial(valuee) {
    var respuesta = this.objects.find(element => element['serial_sim'] === valuee)
    return respuesta["DEPARTAMENTO"]
  }

  getResults(keyword: string) {
    keyword = keyword.toLowerCase();
    return this.objects.filter(
      (object) => {
        const value = object[this.labelAttribute].toLowerCase();
        console.log(value.includes(keyword))
        return value.includes("" + keyword);
      }
    );
  }
}
