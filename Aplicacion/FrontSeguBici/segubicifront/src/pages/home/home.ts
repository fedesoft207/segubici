import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { RestProvider } from '../../providers/rest/rest';
import { UbicacionPage } from '../ubicacion/ubicacion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: String;
  clave: String;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
  }

  registrarse() {

<<<<<<< HEAD
   //this.navCtrl.push(LoginPage) es un metodo para configurar el boton
=======
    //this.navCtrl.push(LoginPage) es un metodo para configurar el boton
>>>>>>> c083b372e0688675c93c5d9b85a5647e0b218dec
    this.navCtrl.push(RegistrarsePage)

  }

  ionViewDidLoad() {
    if(window.localStorage["token"]){
      this.navCtrl.setRoot(UbicacionPage);
    }
  }

  iniciarSesion() {
    var data = { 'username': this.usuario, 'password': this.clave };
    this.restProvider.login(data)
      .then((data:any) => {
        window.localStorage['token'] = data.key; // para guardar el token en el local storage -consola-aplicacion
        this.navCtrl.push(UbicacionPage);
      }, (err) => {
        console.log(err);
      });
  }
  
  mostrarUbicacion() {
    this.navCtrl.push(UbicacionPage);
    }
}
