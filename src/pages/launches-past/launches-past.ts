import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXapiProvider } from "../../providers/space-xapi/space-xapi";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {
  }

  ionViewDidLoad(){
    this.api.getPreviousLaunches().subscribe( data => this.launches = data);
  }

  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

}
