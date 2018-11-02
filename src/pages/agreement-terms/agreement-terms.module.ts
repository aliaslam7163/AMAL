import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgreementTermsPage } from './agreement-terms';

@NgModule({
  declarations: [
    AgreementTermsPage,
  ],
  imports: [
    IonicPageModule.forChild(AgreementTermsPage),
  ],
})
export class AgreementTermsPageModule {}
