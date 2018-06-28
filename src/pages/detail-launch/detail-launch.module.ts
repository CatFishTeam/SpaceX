import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailLaunchPage } from './detail-launch';

@NgModule({
  declarations: [
    DetailLaunchPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailLaunchPage),
  ],
})
export class DetailLaunchPageModule {}
