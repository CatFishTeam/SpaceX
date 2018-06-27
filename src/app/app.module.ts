import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabslaunchesPage } from "../pages/tabslaunches/tabslaunches";
import { LaunchesPastPage } from "../pages/launches-past/launches-past";
import { LaunchesFuturPage } from "../pages/launches-futur/launches-futur";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import { DetailLaunchpadPage } from '../pages/detail-launchpad/detail-launchpad';
import { SpaceXapiProvider } from '../providers/space-xapi/space-xapi';
import { RocketsPage } from "../pages/rockets/rockets";
import {DetailRocketPage} from "../pages/detail-rocket/detail-rocket";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LaunchpadPage,
    DetailLaunchpadPage,
    RocketsPage,
    DetailRocketPage,
    LaunchesPastPage,
    LaunchesFuturPage,
    TabslaunchesPage
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
    ListPage,
    LaunchpadPage,
    DetailLaunchpadPage,
    RocketsPage,
    DetailRocketPage,
    LaunchesPastPage,
    LaunchesFuturPage,
    TabslaunchesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpaceXapiProvider,
    NativePageTransitions
  ]
})
export class AppModule {}
