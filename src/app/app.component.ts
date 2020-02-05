import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AndroidFingerprintAuth} from '@ionic-native/android-fingerprint-auth/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public fingerPrint:AndroidFingerprintAuth,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.checkDark();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    
      if(this.fingerPrint.isAvailable()){
        console.log("Huella");
        this.fingerPrint.isAvailable().then((result)=>{
          if(result.isAvailable){
            this.fingerPrint.encrypt({
              clientId:"id",
              username:"user",
              password:"password"
            }).then((result)=>{
                if(result.withFingerprint){
                  this.navCtrl.navigateForward(['/movie']);
                }else{
                  if(result.withBackup){
                    alert("backup OK");
                    this.navCtrl.navigateForward(['/movie']);
                  }else{
                    alert("Credenciales Invalidas");
                  }                
                }
            },(err)=>{
              if(err == this.fingerPrint.ERRORS.FINGERPRINT_CANCELLED){
                alert("Cancelando...");
              }else{
                alert(JSON.stringify(err));
              }
            })
          }else{
            alert("El sensor de huella se encuentra desactivado");
          }
        }),(err)=>{
          alert(JSON.stringify(err))
        }
      }else{
        console.log("Vamo al login");
        alert("Vamo al login");
        this.navCtrl.navigateForward(['/login']);
      }



     
    });
  }



  checkDark(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }
}


    