import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SpaceXapiProvider} from "../../providers/space-xapi/space-xapi";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  company : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {
  }

  ionViewDidLoad() {
    this.api.getCompany().subscribe(data => this.company = data);
  }

}
