import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';
import { DetailLaunchPage } from "../detail-launch/detail-launch";


@IonicPage()
@Component({
  selector: 'page-detail-launchpad',
  templateUrl: 'detail-launchpad.html',
})
export class DetailLaunchpadPage {

  launchpadId : string = this.navParams.get('id').launchpadId;
  launchpad : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public viewCtrl: ViewController, public api: SpaceXapiProvider) {
    this.api.getLaunchpad(this.launchpadId).subscribe(data => this.launchpad = data);
  }


  launchDetails(launchId){
    this.navCtrl.push(DetailLaunchPage, { id: launchId });
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
