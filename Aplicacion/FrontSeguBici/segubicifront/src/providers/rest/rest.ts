import { HttpClient, HttpHeaders } from '@angular/common/http'; //httpheaders envia parametros en la cabecera
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://5440c0f3.ngrok.io/';
  loginService = "api/login/";
  apiregister = "propietario/" 
  apiidentificacion = "Tipoidentificacion/" 


  
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  login(data) {

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.loginService, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  registro(data) {
    return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl + this.apiregister, data)
    .subscribe(res => {
    resolve(res);
    }, (err) => {
    reject(err);
    });
    });
    }

    getidentificacion() {
      return new Promise(resolve => {
        this.http.get(this.apiUrl + this.apiidentificacion).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
   


  /*enviarFoto(data) {
    return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl + this.apiDenuncias, data, {
    headers: new HttpHeaders().set('Authorization', 'token ' +
   window.localStorage['token'])
    }).subscribe(data => {
    resolve(data);
    }, err => {
    reject(err);
    });
    });
    }*/

}
