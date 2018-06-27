import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LaunchesFuturPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launches-futur',
  templateUrl: 'launches-futur.html',
})
export class LaunchesFuturPage {

  launches : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    fetch('https://api.spacexdata.com/v2/launches/upcoming')
      .then(res => res.json())
      .then(data =>  {
        console.log(data);
        this.launches = data;
      });
  }

  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }

}
