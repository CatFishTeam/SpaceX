import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchesPastPage } from './launches-past';

@NgModule({
  declarations: [
    LaunchesPastPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchesPastPage),
  ],
})
export class LaunchesPastPageModule {}
