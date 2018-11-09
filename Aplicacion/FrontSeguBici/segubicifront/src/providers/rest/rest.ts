import { HttpClient, HttpHeaders } from '@angular/common/http'; //httpheaders envia parametros en la cabecera
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = ' http://1cf5e72d.ngrok.io/';
  loginService = "api/login/";
  apiregister = "propietario/";
  apiidentificacion = "Tipoidentificacion/";
  apiUsuarioActual = 'api/user/';
  apimibici = 'Bicicleta/';



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

  getUsuarioActual() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiUsuarioActual, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe((data: any) => {
        let usuario = this.getUsuario(data.pk);
        resolve(usuario);
      }, err => {
        console.log(err);
      });
    });
  }
  getUsuario(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiregister + '?user_id=' + id, { headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe(data => {
        resolve(data[0]);
      }, err => {
        console.log(err);
      });
    });
  }

  registrarmiBici(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apimibici, data, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
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
