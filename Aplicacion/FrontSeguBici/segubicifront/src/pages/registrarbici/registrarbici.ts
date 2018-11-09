import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UbicacionPage } from '../ubicacion/ubicacion';



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

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
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
      console.log("registro de bicicleta exitoso");
    }, (err) => {
      console.log(err);
    });
  }

  }


