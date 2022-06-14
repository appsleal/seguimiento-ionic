import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService implements AutoCompleteService{
  labelAttribute = 'data';
  public objects: any[] = [
    {
      "data": 'C.C.',
    },
    {
      "data": 'T.I.',
    }
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
