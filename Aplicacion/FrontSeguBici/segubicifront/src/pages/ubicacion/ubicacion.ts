import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
import { GoogleMaps, GoogleMap, GoogleMapOptions } from '@ionic-native/google-maps';
import { RegistrarbiciPage } from '../registrarbici/registrarbici';

/**
 * Generated class for the UbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html',
})
export class UbicacionPage {

  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbicacionPage');


  }

  obtenerPosicion() {
    this.geolocation.getCurrentPosition().then((coordenadas) => {
      this.loadMap(coordenadas);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMap(coordenadas) {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: coordenadas.coords.latitude,
          lng: coordenadas.coords.longitude
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: coordenadas.coords.latitude,
        lng: coordenadas.coords.longitude
      }
    });
  }



  cerrarSesion() {
    //podemos crear un servicio en rest.ts para eliminar el toke del servidor
    //api/logout
    this.navCtrl.setRoot(HomePage)
    localStorage.clear()
  }

  registrarBici(){

    //this.navCtrl.push(LoginPage) es un metodo para configurar el boton
    this.navCtrl.push(RegistrarbiciPage)
  }

}
