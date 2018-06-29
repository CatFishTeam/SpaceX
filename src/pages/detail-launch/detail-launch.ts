import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SpaceXapiProvider} from "../../providers/space-xapi/space-xapi";
import {DetailRocketPage} from "../detail-rocket/detail-rocket";
import {DetailLaunchpadPage} from "../detail-launchpad/detail-launchpad";

/**
 * Generated class for the DetailLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-launch',
  templateUrl: 'detail-launch.html',
})
export class DetailLaunchPage {

  launchId : string = this.navParams.get('id').launchId;
  launch : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {
  }

  rocketDetail(rocketId) {
    this.navCtrl.push(DetailRocketPage, { id: rocketId });
  }

  openModal(launchpadId) {

    this.navCtrl.push(DetailLaunchpadPage, { id: launchpadId });
    //let modal = this.modalCtrl.create(DetailLaunchpadPage, charNum);
    //modal.present();
  }

  ionViewDidLoad() {
    this.api.getLaunch(this.launchId).subscribe(data => this.launch = data[0]);
  }

}
