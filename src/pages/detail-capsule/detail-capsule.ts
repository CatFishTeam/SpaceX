import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { SpaceXapiProvider } from "../../providers/space-xapi/space-xapi";
import { ICapsules } from "../../services/ICapsules";

@IonicPage()
@Component({
  selector: 'page-detail-capsule',
  templateUrl: 'detail-capsule.html',
})
export class DetailCapsulePage {

  capsuleId : string = this.navParams.get('id');
  capsule : ICapsules;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public viewCtrl: ViewController, public api: SpaceXapiProvider) {
    console.log(this.capsuleId);
    this.api.getCapsule(this.capsuleId).subscribe(data => this.capsule = data,
      ()=>{ console.log(this.capsule) },
      ()=>{ console.log(this.capsule) }
      );
  }

  ionViewDidLoad() {
  }

}
