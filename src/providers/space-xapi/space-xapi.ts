import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { IRockets } from '../../services/IRockets';
import { ILaunchpads } from '../../services/ILaunchpads';

@Injectable()
export class SpaceXapiProvider {

  apiRoot:string = "https://api.spacexdata.com/v2";
  constructor(private http: HttpClient){}

  getRockets() : Observable<IRockets[]> {
      let apiURL = `${this.apiRoot}/rockets`;
      console.log(this.http.get<IRockets[]>(apiURL).subscribe((res) => { console.log(res) }));
      return this.http.get<IRockets[]>(apiURL);
  }

  getRocket(name) : Observable<IRockets> {
    let apiURL = `${this.apiRoot}/rockets/`+name;
    return this.http.get<IRockets>(apiURL);
  }
    getLaunchpads() : Observable<ILaunchpads[]> {
      let apiURL = `${this.apiRoot}/launchpads`;
    console.log(this.http.get<ILaunchpads[]>(apiURL).subscribe((res) => { console.log(res) }));
    return this.http.get<ILaunchpads[]>(apiURL);
  }


  getLaunchpad(name) : Observable<ILaunchpads> {
    let apiURL = `${this.apiRoot}/launchpads/` + name;
    return this.http.get<ILaunchpads>(apiURL);
  }

  getUpcomingLaunches() : Observable<IRockets> {
    let apiURL = `${this.apiRoot}/launches/upcoming`;
    return this.http.get<IRockets>(apiURL);
  }

  getPreviousLaunches() : Observable<IRockets> {
    let apiURL = `${this.apiRoot}/launches`;
    return this.http.get<IRockets>(apiURL);
  }
}
