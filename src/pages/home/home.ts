import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rockets:any;
  constructor(
    public navCtrl: NavController,
    public api: SpaceXapiProvider
  ){}

  ionViewDidLoad(){
    this.api.getRockets().subscribe(data => this.rockets = data);
  }

}
