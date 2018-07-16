import {Component, NgModule, ViewChild} from '@angular/core';
import {IonicPageModule, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RocketsPage } from "../pages/rockets/rockets";
import { CapsulesPage } from "../pages/capsules/capsules";
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import { TabslaunchesPage } from '../pages/tabslaunches/tabslaunches';

import { Deeplinks } from '@ionic-native/deeplinks';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string, color: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private deeplinks: Deeplinks) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    /*
    * `icon` : https://ionicframework.com/docs/ionicons/
    * `color` : voir dans src/theme/variables.scss > section `$colors`
    * */
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home', color: 'primary' },
      { title: 'Rockets', component: RocketsPage, icon: 'ios-jet', color: 'danger' },
      { title: 'Capsules', component: CapsulesPage,  icon: 'calendar', color: 'dark' },
      { title: 'Launchpad', component: LaunchpadPage, icon: 'planet', color: '' },
      { title: 'Launches', component: TabslaunchesPage,  icon: 'calendar', color: 'dark' },

    ];

    this.platform.ready().then(() => {
      this.deeplinks.route({
        '/about-us': HomePage,
        '/rockets/:rocketId': RocketsPage
      }).subscribe((match) => {
          // match.$route - the route we matched, which is the matched entry from the arguments to route()
          // match.$args - the args passed in the link
          // match.$link - the full link data
          console.log('Successfully matched route', match);
        },
        (nomatch) => {
          // nomatch.$link - the full link data
          console.error('Got a deeplink that didn\'t match', nomatch);
        });
    });
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
