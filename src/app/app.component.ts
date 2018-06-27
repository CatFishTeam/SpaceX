import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import {RocketsPage} from "../pages/rockets/rockets";

import { TabslaunchesPage } from '../pages/tabslaunches/tabslaunches';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabslaunchesPage;

  pages: Array<{title: string, component: any, icon: string, color: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    /*
    * `icon` : https://ionicframework.com/docs/ionicons/
    * `color` : voir dans src/theme/variables.scss > section `$colors`
    * */
    this.pages = [
      { title: 'Home', component: HomePage, icon: '', color: '' },
      { title: 'List', component: ListPage, icon: '', color: '' },
      { title: 'Launchpad', component: LaunchpadPage, icon: '', color: '' },
      { title: 'Home', component: HomePage, icon: 'home', color: 'primary' },
      { title: 'Rockets', component: RocketsPage, icon: 'planet', color: 'danger' }
      { title: 'Launches', component: TabslaunchesPage }
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
