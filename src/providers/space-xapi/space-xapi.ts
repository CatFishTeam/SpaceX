import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { IRockets } from '../../services/IRockets';

@Injectable()
export class SpaceXapiProvider {

  apiRoot:string = "https://api.spacexdata.com/v2";
  constructor(private http: HttpClient){}

  getRockets() : Observable<IRockets[]> {
      let apiURL = `${this.apiRoot}/rockets`;
      return this.http.get<IRockets[]>(apiURL);
  }

  getRocket(id) : Observable<IRockets> {
    let apiURL = `${this.apiRoot}/rockets/`+id;
    return this.http.get<IRockets>(apiURL);
  }

  getCompany() : any {
    let apiURL = `${this.apiRoot}/info`;
    return this.http.get(apiURL);
  }
}
