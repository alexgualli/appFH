import { Component, OnInit } from '@angular/core';
import {AndroidFingerprintAuth} from '@ionic-native/android-fingerprint-auth/ngx';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public fingerPrint:AndroidFingerprintAuth,
    private navCtrl: NavController
  ) { 

  }

  ngOnInit() {
  }
  login(form: NgForm) {
    this.loginFingerPrint();
  }

  loginFingerPrint(){
    

  }
}
  