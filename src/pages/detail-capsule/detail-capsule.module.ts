import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCapsulePage } from './detail-capsule';

@NgModule({
  declarations: [
    DetailCapsulePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCapsulePage),
  ],
})
export class DetailCapsulePageModule {}
