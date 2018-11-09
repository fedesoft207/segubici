import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { ToastController } from 'ionic-angular';



/**
 * Generated class for the RegistrarbiciPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarbici',
  templateUrl: 'registrarbici.html',
})
export class RegistrarbiciPage {

  numeroBici: String;
  colorBici: String;
  numeroRin: String;
  usuario: Number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.consultarUsuarioActual();
  }

  consultarUsuarioActual() {
    this.restProvider.getUsuarioActual()
      .then((data: any) => {
        this.usuario = data.id;
      });
  }

  registrarmiBici() {
    var data = {
      'numerobicicleta': this.numeroBici,
      'color': this.colorBici,
      'rin': this.numeroRin,
      'propietario': this.usuario,
    };
    this.restProvider.registrarmiBici(data).then((result: any) => {
      this.presentToast();
    }, (err) => {
      console.log(err);
    });
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Registro Exitoso',
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'middle'
    });
    toast.present();

    toast.onDidDismiss(() => {
      this.navCtrl.push(UbicacionPage);
    });
  }

  }


