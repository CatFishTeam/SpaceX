import { NgModule } from '@angular/core';
import {IonicPageModule, NavController, NavParams} from 'ionic-angular';
import { DetailCapsulePage } from '../detail-capsule/detail-capsule'


@NgModule({
  declarations: [
    DetailCapsulePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCapsulePage),
  ]
})
export class DetailCapsulePageModule{}
