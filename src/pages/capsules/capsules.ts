import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';

import {ICapsules} from "../../services/ICapsules";
import {DetailLaunchpadPage} from "../detail-launchpad/detail-launchpad";
import {CapsuleDetailPage} from "../detail-capsule/capsule-detail";

/**
 * Generated class for the CapsulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsules',
  templateUrl: 'capsules.html',
})
export class CapsulesPage {
  capsules:ICapsules;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider, public modalCtrl: ModalController) {
    this.api.getCapsules().subscribe(data => this.capsules = data);
  }

  openModal(capsuleId) {
    this.navCtrl.push(CapsuleDetailPage, { id: capsuleId });
  }

  ionViewDidLoad() {
    //this.navCtrl.push()
    console.log('ionViewDidLoad CapsulesPage');
  }

}
