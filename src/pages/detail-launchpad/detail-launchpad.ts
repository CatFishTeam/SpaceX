import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';

/**
 * Generated class for the DetailLaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-launchpad',
  templateUrl: 'detail-launchpad.html',
})
export class DetailLaunchpadPage {

  launchpadId : string = this.params.get('id').launchpadId;
  launchpad : any;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public api: SpaceXapiProvider) {

    this.api.getLaunchpad(this.launchpadId).subscribe(data => this.launchpad = data);
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
