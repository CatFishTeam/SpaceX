import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';

/**
 * Generated class for the DetailRocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-rocket',
  templateUrl: 'detail-rocket.html',
})
export class DetailRocketPage {

  rocketId : string = this.navParams.get('id').rocketId;
  rocket : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider) {
  }

  ionViewDidLoad() {
    this.api.getRocket(this.rocketId).subscribe(data => this.rocket = data);
    console.log(this.rocket);
  }

}
