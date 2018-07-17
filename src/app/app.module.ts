import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabslaunchesPage } from "../pages/tabslaunches/tabslaunches";
import { LaunchesPastPage } from "../pages/launches-past/launches-past";
import { LaunchesFuturPage } from "../pages/launches-futur/launches-futur";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import { DetailLaunchpadPage } from '../pages/detail-launchpad/detail-launchpad';
import { SpaceXapiProvider } from '../providers/space-xapi/space-xapi';
import { RocketsPage } from "../pages/rockets/rockets";
import { AboutPage } from "../pages/about/about";
import { DetailRocketPage } from "../pages/detail-rocket/detail-rocket";
import { DetailLaunchPage } from "../pages/detail-launch/detail-launch";

import { CapsulesPage } from "../pages/capsules/capsules";
import { DetailCapsulePage } from "../pages/detail-capsule/detail-capsule"

import { HttpClientModule } from "@angular/common/http";
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LaunchesPastPage,
    LaunchesFuturPage,
    AboutPage,
    DetailLaunchPage,
    TabslaunchesPage,
    LaunchpadPage,
    DetailLaunchpadPage,
    RocketsPage,
    DetailRocketPage,
    CapsulesPage,
    DetailCapsulePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabslaunchesPage,
    LaunchpadPage,
    DetailLaunchpadPage,
    RocketsPage,
    DetailRocketPage,
    LaunchesPastPage,
    LaunchesFuturPage,
    AboutPage,
    DetailLaunchPage,
    CapsulesPage,
    DetailCapsulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SpaceXapiProvider,
    NativePageTransitions
  ]
})
export class AppModule {}
