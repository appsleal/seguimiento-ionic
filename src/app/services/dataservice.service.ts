import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService implements AutoCompleteService {
  labelAttribute = 'data';
  public objects: any[] = [
    {
      "data": 'Ama de casa',
    },
    {
      "data": 'Mayor de edad',
    },
    {
      "data": 'Menor de edad  ',
    },

  ];

  constructor() { }

  getResults(keyword:string) {
    keyword = keyword.toLowerCase();

    return this.objects.filter(
      (object) => {
        const value = object[this.labelAttribute].toLowerCase();

        return value.includes(keyword);
      }
    );
  }
}
