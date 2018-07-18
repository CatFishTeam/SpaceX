import {Component, NgModule} from '@angular/core';
import {IonicPage, IonicPageModule, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import { SpaceXapiProvider } from "../../providers/space-xapi/space-xapi";
import { ICapsules } from "../../services/ICapsules";

@IonicPage()

@NgModule({
  declarations: [
    DetailCapsulePage
  ],
  imports: [
    IonicPageModule.forChild(DetailCapsulePage)
  ],
  entryComponents: [
    DetailCapsulePage
  ]
})


@Component({
  selector: 'page-detail-capsule',
  templateUrl: 'detail-capsule.html',
})
export class DetailCapsulePage {

  capsuleId : string = this.navParams.get('id').capsuleId;
  capsule : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {

  }

  ionViewDidLoad() {
    this.api.getCapsule(this.capsuleId).subscribe(data => this.capsule = data);
  }

}
