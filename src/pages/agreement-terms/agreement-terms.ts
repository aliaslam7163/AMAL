import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgreementTermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agreement-terms',
  templateUrl: 'agreement-terms.html',
})
export class AgreementTermsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgreementTermsPage');
  }

  continue()
  {
    this.navCtrl.pop();
  }

}
