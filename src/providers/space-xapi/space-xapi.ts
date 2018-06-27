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
      console.log(this.http.get<IRockets[]>(apiURL).subscribe((res) => { console.log(res) }));
      return this.http.get<IRockets[]>(apiURL);
  }

  getRocket(id) : Observable<IRockets> {
    let apiURL = `${this.apiRoot}/rockets/`+id;
    return this.http.get<IRockets>(apiURL);
  }
}
