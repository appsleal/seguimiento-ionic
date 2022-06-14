import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  labelAttribute = 'MUNICIPIO';

  public departamento
  constructor(public http: HttpClient) {
    this.init()

  }


  init() {
    this.http.get('assets/colombia.json').subscribe(res=>{
      this.departamento=res
      
    })
  }



getResults(keyword: string) {
  keyword = keyword.toLowerCase();

  return this.departamento.filter(
    (object) => {
      const value = object[this.labelAttribute].toLowerCase();

      return value.includes(keyword);
    }
  );
}
  
}

