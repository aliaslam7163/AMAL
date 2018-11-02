import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { Profile } from '../../models/profile.model';
import { AgreementTermsPage } from '../agreement-terms/agreement-terms';
import { ProfileServiceProvider } from './../../providers/profile-service/profile-service';

@IonicPage()
@Component({
  selector: 'page-become-visible',
  templateUrl: 'become-visible.html',
})

export class BecomeVisiblePage {

  backView:boolean = true;
  menuView:boolean = false;
  months : any[] = [];
  days : any[] = [];
  public profile:Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, modalCtrl:ModalController, public menuCtrl:MenuController, public app:App, public PS:ProfileServiceProvider) {
    this.profile = new Profile();
    this.months = ["January","Febuary","March","April","May","June","July","August","September","October","November", "December"];
    this.days = Array(31).fill(1).map((x,i)=>i+1)
    modalCtrl.create(AgreementTermsPage).present();

  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad BecomeVisiblePage');
  }
  @ViewChild(Slides) slides: Slides;

      ionViewWillEnter()
      {
        //console.log(this.app.getActiveNav().getActive().id);
        //console.log(this.navCtrl.canGoBack());
        this.menuView = this.slides.isBeginning();
        this.slides.lockSwipes(true);
        if(this.slides.getActiveIndex() > 0)
        {
          this.backView = false;
        }
        else
        {
          this.backView = true;
        }
      }
      slideChanged()
      {
        this.menuView = this.slides.isBeginning();

        if(this.slides.getActiveIndex() > 0)
        {
          this.backView = false;
        }
        else
        {
          this.backView = true;
        }
      }

      openMenu()
      {
        console.log(this.navCtrl.canGoBack());
        if(this.navCtrl.canGoBack())
        {
          this.navCtrl.pop();
        }
        else
        {
          this.menuCtrl.open();
        }
      }

      slide()
      {
        this.slides.lockSwipes(false);
        //console.log(this.profile);
        this.slides.slideNext(700);
        this.slides.lockSwipes(true);
      }

      slideBack()
      {
        //console.log("Slide Back");
        this.slides.lockSwipes(false);
        this.slides.slidePrev(700);
        this.slides.lockSwipes(true);
      }


      formSubmit()
      {
        if(this.profile.Anon)
        {
          this.profile.firstName = 'John';
          this.profile.lastName = "Doe";
          this.profile.email = "johndoe@gmail.com"
          this.profile.number = "555-555-5555";
        }
        this.PS.insertProfile(this.profile);
      }




      /* The Following methods are setting Profile properties using button click functions */
      ////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////ALCOHOLIC PROPERTY//////////////////////////////////////////////////
      setAlcoholic(answer)
      {
        this.profile.alcoholic = answer;
      }
      ////////////////////////////////////MARIJUANA USAGE///////////////////////////////////////////////////
      setMJ(answer)
      {
        this.profile.mj = answer;
      }
      ////////////////////////////////////DRUGS USAGE/////////////////////////////////////////////////////
      setDrugs(answer)
      {
        this.profile.drugs = answer;
      }
      //////////////////////////////////////DISABLED/////////////////////////////////////////////////////
      setDisabled(answer)
      {
        this.profile.disabled = answer;
      }
      //////////////////////////////////////VETERN///////////////////////////////////////////////////////
      setVetern(answer)
      {
        this.profile.vetern = answer;
      }
      //////////////////////////////////////STAY ANONYMOUS/////////////////////////////////////////////////////////
      setAnonymous(answer)
      {
        this.profile.Anon = answer;
      }
      ////////////////////////////////////////////////////////////////////////////////////////////////////
}
