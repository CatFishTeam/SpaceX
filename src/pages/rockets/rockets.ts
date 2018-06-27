import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {DetailRocketPage} from "../detail-rocket/detail-rocket";
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';

/**
 * Generated class for the RocketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rockets',
  templateUrl: 'rockets.html',
})
export class RocketsPage {

  rockets : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, public api: SpaceXapiProvider) {
    this.api.getRockets().subscribe( data => this.rockets = data);
  }

  rocketDetail(rocketId) {
    this.navCtrl.push(DetailRocketPage, { id: rocketId });
  }

  ionViewDidLoad() {
  }

}
