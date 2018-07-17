import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SpaceXapiProvider} from "../../providers/space-xapi/space-xapi";
import {ICapsules} from "../../services/ICapsules";

/**
 * Generated class for the CapsuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-capsule',
  templateUrl: 'detail-capsule.html',
})
export class DetailCapsulePage {

  capsuleId : string = this.navParams.get('id').capsuleId;
  capsule : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {
    this.api.getCapsule(this.capsuleId).subscribe(data => { this.capsule = data[0] });
  }

  ionViewDidLoad() {
  }

}
