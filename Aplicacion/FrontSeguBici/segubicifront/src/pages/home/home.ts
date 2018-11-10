import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { RestProvider } from '../../providers/rest/rest';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: String;
  clave: String;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  registrarse() {

    //this.navCtrl.push(LoginPage) es un metodo para configurar el boton
    this.navCtrl.push(RegistrarsePage)

  }

  ionViewDidLoad() {
    if(window.localStorage["token"]){
      this.navCtrl.setRoot(UbicacionPage);
    }
  }

  iniciarSesion() {
    this.presentLoading();
    var data = { 'username': this.usuario, 'password': this.clave };
    this.restProvider.login(data)
      .then((data:any) => {
        window.localStorage['token'] = data.key; // para guardar el token en el local storage -consola-aplicacion
        this.navCtrl.push(UbicacionPage);
      }, (err) => {
        this.presentToast();
      });
  }
  
  mostrarUbicacion() {
    this.navCtrl.push(UbicacionPage);
    }

  presentLoading() {
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      loader.present();
    }

    presentToast() {
      const toast = this.toastCtrl.create({
        message: 'contraseña o usuario incorrecto',
        duration: 3000,
        position: 'middle',

      });
      toast.present();
    }
}
