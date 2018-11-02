import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstitutionalServicesPage } from './institutional-services';

@NgModule({
  declarations: [
    InstitutionalServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(InstitutionalServicesPage),
  ],
})
export class InstitutionalServicesPageModule {}
