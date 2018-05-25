import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchpadPage } from '../pages/launchpad/launchpad';
import { DetailLaunchpadPage } from '../pages/detail-launchpad/detail-launchpad';
import { SpaceXapiProvider } from '../providers/space-xapi/space-xapi';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { RocketsPage } from "../pages/rockets/rockets";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LaunchpadPage,
    DetailLaunchpadPage,
    RocketsPage
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
    RocketsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpaceXapiProvider
  ]
})
export class AppModule {}
