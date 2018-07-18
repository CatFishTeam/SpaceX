import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXapiProvider } from "../../providers/space-xapi/space-xapi";
import { DetailRocketPage } from "../detail-rocket/detail-rocket";
import { DetailLaunchpadPage } from "../detail-launchpad/detail-launchpad";
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the DetailLaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-launch',
  templateUrl: 'detail-launch.html',
})
export class DetailLaunchPage {

  launchId : string = this.navParams.get('id').launchId;
  launch : any;
  videoUrl : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider, public sanitizer: DomSanitizer) {

  }

  rocketDetail(rocketId) {
    this.navCtrl.push(DetailRocketPage, { id: rocketId });
  }

  openModal(launchpadId) {
    this.navCtrl.push(DetailLaunchpadPage, { id: launchpadId });
  }

  ionViewDidLoad() {
    this.api.getLaunch(this.launchId).subscribe(data => this.launch = data[0]);

    this.api.getLaunch(this.launchId).subscribe(data => {
        this.launch = data[0]
      },
      error => console.log("Error", error),
      () => {
        if (this.launch.links.video_link) {
          this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.launch.links.video_link.replace("watch?v=", "embed/"));
        }
      });
  }
}
