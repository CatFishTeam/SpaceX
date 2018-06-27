import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LaunchesPastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launches-past',
  templateUrl: 'launches-past.html',
})
export class LaunchesPastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

}
