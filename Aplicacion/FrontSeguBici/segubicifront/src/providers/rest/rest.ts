import { HttpClient, HttpHeaders } from '@angular/common/http'; //httpheaders envia parametros en la cabecera
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:8000/';
  loginService = "api/login/";
  
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

}
