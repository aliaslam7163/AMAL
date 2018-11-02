//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FoodService } from '../../models/foodService.model';


/*
  Generated class for the FoodserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodServiceProvider {


  constructor( public db: AngularFireDatabase) {
    console.log('Hello FoodserviceProvider Provider');
  }

  getFoodServices(){
    console.log(this.db.list('/foodServices/'));
  }

  insertFoodList()
  {
    /*let foodList = {
      name : 'Ali Aslam',
      address : 'Bellevue,WA',
      timeOffered : {'timeStart':0,'timeEnd':0},
      timeRemaining : 0,
      phoneNumber : '4253517250',
      gratitudeStand : 4.8,
    }*/
    //console.log(foodList);
    //this.db.list('/foodService').push(foodList);
  }

}
