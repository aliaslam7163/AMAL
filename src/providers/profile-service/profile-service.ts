//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile.model';

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  constructor(public db:AngularFireDatabase) {
    console.log('Hello ProfileServiceProvider Provider');
  }

  insertProfile(profile:Profile){
    console.log(profile);
    this.db.list('/profile').push(profile);
  }

}
