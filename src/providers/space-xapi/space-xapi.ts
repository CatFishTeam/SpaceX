import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { IRockets } from '../../services/IRockets';
import {subscribeToResult} from "rxjs/util/subscribeToResult";

@Injectable()
export class SpaceXapiProvider {

  apiRoot:string = "https://api.spacexdata.com/v2";
  constructor(private http: HttpClient) {}

  getLaunches(name = null) : Observable<IRockets[]> {
      let apiURL = `${this.apiRoot}/rockets`;
      console.log(this.http.get<IRockets[]>(apiURL).subscribe((res) => { console.log(res) }));
      return this.http.get<IRockets[]>(apiURL);
  }
}
