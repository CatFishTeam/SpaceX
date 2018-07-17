import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { IRockets } from '../../services/IRockets';
import { ILaunchpads } from '../../services/ILaunchpads';
import { ILaunch } from "../../services/ILaunch";
import { ILaunches } from '../../services/ILaunches';
import { ICapsules } from "../../services/ICapsules";

@Injectable()
export class SpaceXapiProvider {

  apiRoot: string = "https://api.spacexdata.com/v2";

  constructor(private http: HttpClient) {
  }

  getRockets(): Observable<IRockets[]> {
    let apiURL = `${this.apiRoot}/rockets`;
    console.log(this.http.get<IRockets[]>(apiURL).subscribe((res) => {
      console.log(res)
    }));
    return this.http.get<IRockets[]>(apiURL);
  }

  getRocket(name): Observable<IRockets> {
    let apiURL = `${this.apiRoot}/rockets/` + name;
    return this.http.get<IRockets>(apiURL);
  }

  getLaunchpads(): Observable<ILaunchpads[]> {
    let apiURL = `${this.apiRoot}/launchpads`;
    console.log(this.http.get<ILaunchpads[]>(apiURL).subscribe((res) => {
      console.log(res)
    }));
    return this.http.get<ILaunchpads[]>(apiURL);
  }

  getLaunchpad(name): Observable<ILaunchpads> {
    let apiURL = `${this.apiRoot}/launchpads/` + name;
    return this.http.get<ILaunchpads>(apiURL);
  }


  getUpcomingLaunches() : Observable<ILaunch> {
    let apiURL = `${this.apiRoot}/launches/upcoming`;
    return this.http.get<ILaunch>(apiURL);
  }

  getPreviousLaunches() : Observable<ILaunch> {
    let apiURL = `${this.apiRoot}/launches`;
    return this.http.get<ILaunch>(apiURL);
  }

  getLaunch(name) : Observable<ILaunch> {
    let apiURL = `${this.apiRoot}/launches/all?flight_number=` + name;
    return this.http.get<ILaunch>(apiURL);
  }

  getNextLaunche(): Observable<ILaunches> {
    let apiURL = `${this.apiRoot}/launches/next`;
    console.log(this.http.get<ILaunches[]>(apiURL).subscribe((res) => {
      console.log(res)
    }));
    return this.http.get<ILaunches>(apiURL);
  }

  getLastLaunche(): Observable<ILaunches> {
    let apiURL = `${this.apiRoot}/launches/latest`;
    console.log(this.http.get<ILaunches[]>(apiURL).subscribe((res) => {
      console.log(res)
    }));
    return this.http.get<ILaunches>(apiURL);
  }

  getCapsules(): Observable<ICapsules[]> {
    let apiURL = `${this.apiRoot}/capsules`;
    console.log(this.http.get<ICapsules[]>(apiURL).subscribe((res) => {
      console.log(res)
    }));
    return this.http.get<ICapsules[]>(apiURL);
  }

  getCapsule(name) : Observable<ICapsules> {
    let apiURL = `${this.apiRoot}/capsules/` + name;
    return this.http.get<ICapsules>(apiURL);
  }

}
