import {Component, NgModule} from '@angular/core';
import {IonicPage, IonicPageModule, NavController, NavParams} from 'ionic-angular';
import { SpaceXapiProvider } from "../../providers/space-xapi/space-xapi";
import {DetailRocketPage} from "../detail-rocket/detail-rocket";
import {DetailLaunchPage} from "../detail-launch/detail-launch";
import {HomePage} from "../home/home";

/**
 * Generated class for the LaunchesPastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector : 'page-launches-past',
  templateUrl : 'launches-past.html',
})

export class LaunchesPastPage {

  launches : any;
  dates : any = { lower: 2000, upper: 2020 };
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {
    this.initializeLaunches();
  }

  initializeLaunches() {
    this.api.getPreviousLaunches().subscribe( data => this.launches = data);
  }

  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(1);
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

  lanchesSuccesFilter(ev: any) {
    // Reset items back to all of the items

    console.log(ev);

    // set val to the value of the searchbar
    const val = ev.checked;



    // if the value is an empty string don't filter the items{
      this.launches = this.launches.filter((item) => {
        return (item.launch_success == val);
      })
  }

  launchDetail(flightNumber) {
    this.navCtrl.push(DetailLaunchPage, { id: flightNumber });
  }

}
