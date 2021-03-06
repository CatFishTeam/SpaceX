import {Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';
import { DetailLaunchPage } from "../detail-launch/detail-launch";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  launch: any;
  lastLaunchId: any;
  date:any;
  interval:Number;
  days:Number;
  hours:Number;
  minutes:Number;
  secondes:Number;
  constructor(
    public navCtrl: NavController,
    public api: SpaceXapiProvider
  ){}

  launchDetails(launchId){
    this.navCtrl.push(DetailLaunchPage, { id: launchId });
  }

  lastLaunch(){
      this.api.getLastLaunche().subscribe( data => { this.lastLaunchId = data },
        error => console.log("Error", error),
        () => {
          this.navCtrl.push(DetailLaunchPage, { id: {launchId: this.lastLaunchId.flight_number}});
        })
  }

  nextLaunch(){
    this.api.getNextLaunche().subscribe( data => { this.lastLaunchId = data },
      error => console.log("Error", error),
      () => {
        this.navCtrl.push(DetailLaunchPage, { id: {launchId: this.lastLaunchId.flight_number}});
      })
  }

  ionViewDidLoad(){
    this.api.getNextLaunche().subscribe( data => { this.launch = data },
    error => console.log("Error: ", error),
    () => {
      this.date = this.launch.launch_date_unix - Math.round(Date.now() / 1000);
      setInterval(function () {
        this.interVal =  this.date--;

        this.days = Math.floor(this.date/86400);

        const hourSecondes = this.date % 86400;
        this.hours = Math.floor(hourSecondes/3600);

        const minuteSeconds = hourSecondes % 3600;
        this.minutes = Math.floor(minuteSeconds / 60);

        const remainingSeconds = minuteSeconds % 60;
        this.secondes = Math.ceil(remainingSeconds);

        clearInterval(this.interval);
      }.bind(this), 1000);
    })
  }
}
