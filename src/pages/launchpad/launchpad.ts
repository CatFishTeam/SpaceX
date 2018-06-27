import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailLaunchpadPage } from '../detail-launchpad/detail-launchpad';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies

    this.items = [];
    for (let i = 1; i < 7; i++) {
      this.items.push({
        title: 'Launchpad ' + i,
        charNum: i,
        note: 'This is lauchpad #' + i
      });
    }

  }

  openModal(charNum) {
    let modal = this.modalCtrl.create(DetailLaunchpadPage, charNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadPage');
  }

}
