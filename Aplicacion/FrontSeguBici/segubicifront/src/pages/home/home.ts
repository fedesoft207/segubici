import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  registrarse() {

   //this.navCtrl.push(LoginPage) es un metodo para configurar el boton
    this.navCtrl.setRoot(RegistrarsePage)

  }

}
