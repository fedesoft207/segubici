import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestProvider } from '../../providers/rest/rest';



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
 
  options: CameraOptions = {
    quality: 70,
    targetWidth: 500,
    targetHeight: 500,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    this.tipoDeIdentificacion();
  }

  tipoDeIdentificacion() {
    this.restProvider.getidentificacion()
      .then(data => { 
        this.tipodeidentificacion = data;
      });
  }

  tomarFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  iniciarRegistro() {
    var data = {
    'nombrepropietario': this.nombredelpropietario,
    'apellidopropietario': this.apellidodelpropietario,
    'username': this.username,
    'numeroidentificacion': this.numerodeidentificacion,
    'password': this.clave
    };
    this.restProvider.registro(data).then((result:any) => {
    this.navCtrl.setRoot(RegistrarsePage);
    }, (err) => {
    console.log(err);
    });
    }
   }

  //enviarFoto() {
    //this.restProvider.enviarFoto(data).then((result: any) => {
      //console.log("Foto subida exitosamente!")
    //}, (err) => {
      //console.log(err);
    //});
  //}


