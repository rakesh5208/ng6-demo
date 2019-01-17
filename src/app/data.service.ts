import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getRegions() {
    return this.httpClient.get<Array<any>>('/assets/regions.json').pipe(map(item=>{
      let i=0;
      let emitItem = [];
      while(i < 2 && i < item.length){
        emitItem.push(item[i]);
        ++i;
      }
      return emitItem;
    }));
  }

  public getRoles(){
    return this.httpClient.get<Array<any>>('/assets/roles.json');
  }
}
