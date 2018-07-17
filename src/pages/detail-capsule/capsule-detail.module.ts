import { NgModule } from '@angular/core';
import {IonicPageModule, NavController, NavParams} from 'ionic-angular';
import { CapsuleDetailPage } from './capsule-detail';
import { SpaceXapiProvider } from '../../providers/space-xapi/space-xapi';


@NgModule({
  declarations: [
    CapsuleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CapsuleDetailPage),
  ],
})
export class CapsuleDetailPageModule {
  capsuleId: string = this.navParams.get('id').capsuleId;
  capsule: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: SpaceXapiProvider)
  {
    this.api.getCapsule(this.capsuleId).subscribe(data => this.capsule = data);
  }
}
