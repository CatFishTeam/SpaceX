import {Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RocketsPage } from "../pages/rockets/rockets";
import { CapsulesPage } from "../pages/capsules/capsules";
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import { TabslaunchesPage } from '../pages/tabslaunches/tabslaunches';
import {AboutPage} from "../pages/about/about";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string, color: string, img: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home', color: 'primary', img: '' },
      { title: 'Launches', component: TabslaunchesPage,  icon: 'calendar', color: 'dark', img: '' },
      { title: 'Rockets', component: RocketsPage, icon: 'ios-jet', color: 'danger', img: '' },
      { title: 'Capsules', component: CapsulesPage,  icon: 'calendar', color: 'dark', img: '' },
      { title: 'Launchpad', component: LaunchpadPage, icon: 'planet', color: 'green', img: '' },
      { title: 'About', component: AboutPage,  icon: '', color: '', img: 'assets/imgs/spacex-logo.svg' },
    ];
    /*
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
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
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
