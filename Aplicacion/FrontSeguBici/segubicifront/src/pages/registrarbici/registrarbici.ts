import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



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
  imagen: any;

options: CameraOptions = {
    quality: 70,
    targetWidth: 500,
    targetHeight: 500,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toastCtrl: ToastController, private camera: Camera) {
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
      if(this.imagen){
        var data = {'bicicleta':result.id, 'urlimagen': this.imagen } 
        this.restProvider.enviarFoto(data).then((result: any) => {
          
        }, (err) => {
          console.log(err);
        });
      }
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

  tomarFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

   //enviarFoto() {

    //this.restProvider.enviarFoto(data).then((result: any) => {
      //console.log("Foto subida exitosamente!")
    //}, (err) => {
      //console.log(err);
    //});
  //}


  }


