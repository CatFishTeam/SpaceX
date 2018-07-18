import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXapiProvider } from "../../providers/space-xapi/space-xapi";
import {DetailLaunchPage} from "../detail-launch/detail-launch";

/**
 * Generated class for the LaunchesFuturPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector : 'page-launches-futur',
  templateUrl : 'launches-futur.html',
})
export class LaunchesFuturPage {

  launches : any;
  dates : any = { lower: 2018, upper: 2030 };
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {
    this.initializeLaunches();
  }

  initializeLaunches() {
    this.api.getUpcomingLaunches().subscribe( data => this.launches = data);
  }


  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }

  launchesDateFilter(ev: any) {
    // Reset items back to all of the items


    // set val to the value of the searchbar
    const val = ev.value;

    // if the value is an empty string don't filter the items
    if (val && val.lower != '' && val.upper != '') {
      this.launches = this.launches.filter((item) => {
        return (item.launch_year >= val.lower && item.launch_year <= val.upper);
      })
    }
  }

  launchesNameFilter(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    const val = ev.target.value;

    if (val == "" || typeof val == 'undefined') {
      this.initializeLaunches();
    }

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.launches = this.launches.filter((item) => {
        return (item.mission_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  launchDetail(flightNumber) {
    this.navCtrl.push(DetailLaunchPage, { id: flightNumber });
  }

}
