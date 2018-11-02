import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { FoodService } from '../../models/foodService.model';
import { FoodServiceProvider } from './../../providers/foodservice/foodservice';


/**
 * Generated class for the FoodServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-services',
  templateUrl: 'food-services.html',
})
export class FoodServicesPage {

  restaurant = {
    name : '',
    location : '',
    address : '',
    timeOffered : '',
    timeRemaining:0,
    phoneNumber : '',
    gratitudeStand : 0,
  }
  businesses : any[] = [];

  foodList : AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public FS: FoodServiceProvider) {
    console.log(this.businesses);
    //this.FS.getFoodServices();
    this.FS.insertFoodList();
    //console.log(this.foodList);
    this.restaurant = {
    name : 'Ali Aslam',
    address : 'Bellevue,WA',
    timeOffered : {'timeStart':0,'timeEnd':0},
    timeRemaining : 0,
    phoneNumber : '4253517250',
    gratitudeStand : 4.8,
    logo : ''
  };
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);
  this.businesses.push(this.restaurant);


  console.log(this.businesses);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodServicesPage');
  }

}
