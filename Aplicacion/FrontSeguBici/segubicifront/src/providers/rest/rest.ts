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
  apiAlumnos = "alumnos/";
  apiCursos = "curso/ "

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
  getAlumnos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiAlumnos, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getCursos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiCursos, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  registrarAlumno(data) {

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apiAlumnos, data, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
