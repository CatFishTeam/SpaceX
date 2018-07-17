import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SpaceXapiProvider} from "../../providers/space-xapi/space-xapi";

/**
 * Generated class for the CapsuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-detail',
  templateUrl: 'capsule-detail.html',
})
export class CapsuleDetailPage {

  capsuleId : string = this.navParams.get('id').capsuleId;
  capsule : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {
    console.log(this.capsuleId);
    this.api.getLaunchpad(this.capsuleId).subscribe(data => this.capsule = data);
  }

  ionViewDidLoad() {
  }

}
