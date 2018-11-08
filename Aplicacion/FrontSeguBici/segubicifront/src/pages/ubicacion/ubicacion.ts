import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
import { GoogleMaps, GoogleMap, GoogleMapOptions } from '@ionic-native/google-maps';

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
    this.obtenerPosicion();
  }

  obtenerPosicion() {
    this.geolocation.getCurrentPosition().then((coordenadas) => {
      this.loadMap(coordenadas);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMap(coordenadas) {

    var citymap = {
      chapineropunto1: {
        center: { lat: 4.656567, lng: -74.047536 },
        population: 10
      },
      chapineropunto2: {
        center: { lat: 4.650579, lng: -74.063930 },
        population: 10
      },
      chapineropunto3: {
        center: { lat: 4.679153, lng: -74.057578 },
        population: 10
      },
      chapineropunto4: {
        center: { lat: 4.637405, lng: -74.064875 },
        population: 10
      }
    };

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: coordenadas.coords.latitude,
          lng: coordenadas.coords.longitude
        },
        zoom: 14,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    
    var inside = 0;
    for (var city in citymap) {

      var radius = Math.sqrt(citymap[city].population) * 100;
      var user = { lat: coordenadas.coords.latitude, lng: coordenadas.coords.longitude };
      var circle = citymap[city].center;
      var n = this.arePointsNear(circle, user, radius);

      if(n){
        inside++;
      }
      // Add the circle for this city to the map.
      this.map.addCircle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: this.map,
        center: citymap[city].center,
        radius: radius
      });
    }

    if (inside>0) {
      this.map.addMarkerSync({
        title: 'Ionic',
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: coordenadas.coords.latitude,
          lng: coordenadas.coords.longitude
        }
      });
      this.mostrarAlerta();
    } else {
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
  }

  arePointsNear(checkPoint, centerPoint, m) { // credits to user:69083
    var km = m / 1000;
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
  }

  mostrarAlerta() {
    const toast = this.toastCtrl.create({
      message: 'Usted esta en una zona peligrosa!',
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'middle'
    });
    toast.present();
  }



  cerrarSesion() {
    //podemos crear un servicio en rest.ts para eliminar el toke del servidor
    //api/logout
    this.navCtrl.setRoot(HomePage)
    localStorage.clear()
  }

}
