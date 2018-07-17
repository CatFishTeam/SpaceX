import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailLaunchpadPage } from '../detail-launchpad/detail-launchpad';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';

/**
 * Generated class for the LaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad',
  templateUrl: 'launchpad.html',
})
export class LaunchpadPage {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, charNum: number}>;
  launchpads:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public api: SpaceXapiProvider) {
    this.api.getLaunchpads().subscribe(data => this.launchpads = data);
  }

  openModal(launchpadId) {
    this.navCtrl.push(DetailLaunchpadPage, { id: launchpadId });
  }

}
