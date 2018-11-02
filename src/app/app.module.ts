import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


                /* FIREBASE MODULES */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
///////////////////////////////////////////////////////////////

                /* App Custom Components */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FoodServicesPage } from '../pages/food-services/food-services';
import { BecomeVisiblePage } from '../pages/become-visible/become-visible';
import { FindShelterPage } from '../pages/find-shelter/find-shelter';
import { InstitutionalServicesPage } from '../pages/institutional-services/institutional-services';
import { SplashPage } from '../pages/splash/splash';
import { AgreementTermsPage } from '../pages/agreement-terms/agreement-terms';
///////////////////////////////////////////////////////////////////////////////////////////////////////

              /* Services for app */
import { FoodServiceProvider } from '../providers/foodservice/foodservice';
import { InstitutionalServiceProvider } from '../providers/institutional-service/institutional-service';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
//////////////////////////////////////////////////////////////////////////////////////////////////////////



const config = {
  apiKey: "AIzaSyCe_ngFLE9k1NEBGzKA0WwdSbCEtqfJyPI",
  authDomain: "amal-hope.firebaseapp.com",
  databaseURL: "https://amal-hope.firebaseio.com",
  projectId: "amal-hope",
  storageBucket: "amal-hope.appspot.com",
  messagingSenderId: "42810456476"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    FoodServicesPage,
    BecomeVisiblePage,
    InstitutionalServicesPage,
    FindShelterPage,
    AgreementTermsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    FoodServicesPage,
    BecomeVisiblePage,
    InstitutionalServicesPage,
    FindShelterPage,
    AgreementTermsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodServiceProvider,
    InstitutionalServiceProvider,
    ProfileServiceProvider,
  ]
})
export class AppModule {}
