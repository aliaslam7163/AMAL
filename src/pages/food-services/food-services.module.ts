import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodServicesPage } from './food-services';

@NgModule({
  declarations: [
    FoodServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodServicesPage),
  ],
})
export class FoodServicesPageModule {}
