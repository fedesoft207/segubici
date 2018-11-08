import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
<<<<<<< HEAD
import { PerfilPage } from '../pages/perfil/perfil';
import { RegistrarbiciPage } from '../pages/registrarbici/registrarbici';
=======
import { DireccionPage } from '../pages/direccion/direccion';
>>>>>>> dece9ae1651b5cf69de9141ccc0bd4b8506c5559


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrarsePage,
    UbicacionPage,
<<<<<<< HEAD
    PerfilPage,
    RegistrarbiciPage,
=======
    DireccionPage
>>>>>>> dece9ae1651b5cf69de9141ccc0bd4b8506c5559
       
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrarsePage,
    UbicacionPage,
    PerfilPage,
    RegistrarbiciPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    RestProvider,
    Geolocation,
    Camera
  ]
})
export class AppModule {}
