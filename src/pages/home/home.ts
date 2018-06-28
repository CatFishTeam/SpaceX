import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  launch:any;
  date:any;
  counter:any;
  constructor(
    public navCtrl: NavController,
    public api: SpaceXapiProvider
  ){}

  ionViewDidLoad(){
    this.api.getNextLaunche().subscribe( data => {this.launch = data },
    error => console.log("Error: ", error),
    () => {
      this.date = this.launch.launch_date_unix - Math.round(Date.now() / 1000);
      Observable.interval(1000).map((x) => { --this.date });
      console.log(this.date);
    })
  }
}
