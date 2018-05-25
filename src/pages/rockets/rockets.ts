import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RocketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rockets',
  templateUrl: 'rockets.html',
})
export class RocketsPage {

  rockets : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    fetch('https://api.spacexdata.com/v2/rockets')
      .then(res => res.json())
      .then(data =>  {
        console.log(data);
        this.rockets = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketsPage');
  }

}
