import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapsuleDetailPage } from './capsule-detail';

@NgModule({
  declarations: [
    CapsuleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CapsuleDetailPage),
  ],
})
export class CapsuleDetailPageModule {}
