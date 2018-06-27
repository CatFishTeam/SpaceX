import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXapiProvider } from "../../providers/space-xapi/space-xapi";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {

  }

  ionViewDidLoad(){
    this.api.getUpcomingLaunches().subscribe( data => this.launches = data);
  }


  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }

}
