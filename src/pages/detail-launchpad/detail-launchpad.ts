import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';
import {DetailRocketPage} from "../detail-rocket/detail-rocket";

@IonicPage()
@Component({
  selector: 'page-detail-launchpad',
  templateUrl: 'detail-launchpad.html',
})
export class DetailLaunchpadPage {

  launchpadId : string = this.navParams.get('id').launchpadId;
  launchpad : any;
  rocket : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public viewCtrl: ViewController, public api: SpaceXapiProvider) {
    this.api.getLaunchpad(this.launchpadId).subscribe(data => this.launchpad = data);
  }

  rocketDetail(rocketName) {
    rocketName = rocketName.replace(/\s/g, '').toLowerCase();
    this.api.getRocket(rocketName).subscribe(data => {
        this.rocket = data
      },
      error => console.log("Error", error),
      () => {
        this.navCtrl.push(DetailRocketPage, {id : {rocketId: this.rocket.id}});
      });
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
