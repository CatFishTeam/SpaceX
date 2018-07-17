import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import {RocketsPage} from "../pages/rockets/rockets";

import { TabslaunchesPage } from '../pages/tabslaunches/tabslaunches';
import {AboutPage} from "../pages/about/about";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabslaunchesPage;

  pages: Array<{title: string, component: any, icon: string, color: string, img: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    /*
    * `icon` : https://ionicframework.com/docs/ionicons/
    * `color` : voir dans src/theme/variables.scss > section `$colors`
    * */
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home', color: 'primary', img: '' },
      { title: 'Launchpad', component: LaunchpadPage, icon: '', color: '', img: '' },
      { title: 'Rockets', component: RocketsPage, icon: 'planet', color: 'danger', img: '' },
      { title: 'Launches', component: TabslaunchesPage,  icon: 'flash', color: 'gold', img: '' },
      { title: 'About', component: AboutPage,  icon: '', color: '', img: 'assets/imgs/spacex-logo.svg' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
