import { Component, ViewChild } from '@angular/core';

import { Platform, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FoodServicesPage } from '../pages/food-services/food-services';
import { BecomeVisiblePage } from '../pages/become-visible/become-visible';
import { FindShelterPage } from '../pages/find-shelter/find-shelter';
import { InstitutionalServicesPage } from '../pages/institutional-services/institutional-services';

import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any, icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl:ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide(); //Commnetd out to allow display of our custom splash screen
      //let splash = modalCtrl.create(SplashPage);
      //splash.present();
      //modalCtrl.create(SplashPage).present();
    });

    /* This section is made for menu navigation. Add or subtract pages using the given examples below */
    modalCtrl.create(SplashPage).present();
    this.pages = [
      {title:'Find temporary shelter', component:FindShelterPage, icon:"home"},
      {title:'Find Clinical Help', component:InstitutionalServicesPage, icon:"heart"},
      {title:'Find Food ', component:FoodServicesPage, icon:"restaurant"},
      {title:'Become Visible', component:BecomeVisiblePage, icon:"hand"}
    ];
    console.log(this.pages);
    console.log("menuCreated");
  }

  /* Each Menu Button is attached to a (click) function called openPage(x)  which once clicked will run this function here */
  openPage(page)
  {
    this.nav.setRoot(page.component);
  }

  restart()
  {
    window.location.reload();
    //this.nav.goToRoot();
  }
}
