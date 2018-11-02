export class Profile{
    firstName:string;
    lastName:string;
    bday:any;
    residence:string;
    shelter:string;
    email:string;
    number:string;
    alcoholic:boolean;
    mj:boolean;
    drugs:boolean;
    Anon:boolean;
    disabled:boolean;
    vetern:boolean;

    constructor(){
      this.firstName = '';
      this.lastName = '';
      this.bday = {'month':'','day':'0','year':'0'};
      this.residence = '';
      this.shelter = '';
      this.email = '';
      this.number = '';
      this.alcoholic = false;
      this.mj = false;
      this.drugs = false;
      this.Anon = false;
      this.disabled = true;
      this.vetern = false;
    }
}
