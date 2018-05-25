import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SpaceXapiProvider {

  apiRoot:string = "https://api.spacexdata.com/v2";

  constructor(private http: HttpClient) {}

  getLaunches(name = null) : Observable<any> {
      let apiURL = `${this.apiRoot}/rockets`;
      console.log(this.http.get(apiURL))
      return this.http.get(apiURL);
  }
}
