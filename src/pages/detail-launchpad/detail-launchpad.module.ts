import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailLaunchpadPage } from './detail-launchpad';

@NgModule({
  declarations: [
    DetailLaunchpadPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailLaunchpadPage),
  ],
})
export class DetailLaunchpadPageModule {}
