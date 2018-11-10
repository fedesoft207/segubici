import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestProvider } from '../../providers/rest/rest';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { LoadingController } from 'ionic-angular';



/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
  imagen: any;
  tipodeidentificacion: any;
  username: String;
  nombredelpropietario: String;
  apellidodelpropietario: String;
  numerodeidentificacion: String;
  clave: String;
  tipodeidentificaciones: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public restProvider: RestProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.tipoDeIdentificacion();
  }

  tipoDeIdentificacion() {
    this.restProvider.getidentificacion()
      .then(data => {
        this.tipodeidentificaciones = data;
      });
  }

  iniciarRegistro() {
    this.presentLoading();
    var data = {
      'nombrepropietario': this.nombredelpropietario,
      'apellidopropietario': this.apellidodelpropietario,
      'username': this.username,
      'numeroidentificacion': this.numerodeidentificacion,
      'tipoidentificacion': this.tipodeidentificacion,
      'password': this.clave
    };
    this.restProvider.registro(data).then((result: any) => {

      var data = { 'username': this.username, 'password': this.clave };
      this.restProvider.login(data)
        .then((data: any) => {
          window.localStorage['token'] = data.key; // para guardar el token en el local storage -consola-aplicacion
          this.navCtrl.push(UbicacionPage);
        }, (err) => {
          console.log(err);
        });

    }, (err) => {
      console.log(err);
    });
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}





 

