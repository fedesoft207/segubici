import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { Token } from '@angular/compiler';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: String;
  clave: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    if(window.localStorage["token"]){
      this.navCtrl.setRoot(HomePage);

    }
  }

  iniciarSesion() {
    var data = { 'username': this.usuario, 'password': this.clave };
    this.restProvider.login(data)
      .then((data:any) => {
        window.localStorage['token'] = data.key; // para guardar el token en el local storage -consola-aplicacion
        this.navCtrl.push(HomePage);
      }, (err) => {
        console.log(err);
      });
  }
  
}
