import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';

import { ICapsules } from "../../services/ICapsules";
import { DetailCapsulePage } from "../detail-capsule/detail-capsule";

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
  capsules: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider, public modalCtrl: ModalController) {
    this.api.getCapsules().subscribe(data => this.capsules = data);
  }

  openModal(capsuleId) {
    this.navCtrl.push(DetailCapsulePage, { id: capsuleId });
  }

  ionViewDidLoad() {
  }

}
