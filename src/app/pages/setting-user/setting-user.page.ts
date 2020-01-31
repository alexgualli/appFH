import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting-user',
  templateUrl: './setting-user.page.html',
  styleUrls: ['./setting-user.page.scss'],
})
export class SettingUserPage implements OnInit {

  imagePath='';

  constructor(private camera: Camera, public navController:NavController) { }
  

  ngOnInit() {
  }
  takePicture(){

    console.log('tomando foto');

    const options: CameraOptions = {
      //quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit:false,
      targetHeight:1024,
      targetWidth:1024,
      correctOrientation:true,
      saveToPhotoAlbum:true
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imagePath = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
     
     });
   
  }

 
  
  

}
