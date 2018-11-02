import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../home/home';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public splashScreen: SplashScreen) {
  }

  ionViewDidEnter()
  {
    this.splashScreen.hide();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SplashPage');
  }

  continueApp()
  {
    //this.navCtrl.setRoot(HomePage);
    this.navCtrl.pop();
  }

}
