import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { IRockets } from '../../services/IRockets';

@Injectable()
export class SpaceXapiProvider {

  apiRoot:string = "https://api.spacexdata.com/v2";

  constructor(private http: HttpClient) {}

  getLaunches(name = null) : Observable<IRockets[]> {
      let apiURL = `${this.apiRoot}/rockets`;
      console.log(this.http.get(apiURL).map((res: Response) => res.json()));
      return this.http.get<IRockets[]>(apiURL);
  }
}
