import { Router } from '@angular/router';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from './environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFire';


constructor(private router: Router){
 firebase.initializeApp(FIREBASE_CONFIG);
 this.catchUser();
}

catchUser(){
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(!user)
      {
      this.router.navigateByUrl('/');
      unsubscribe();
    }else {
      this.router.navigateByUrl('home');
      unsubscribe();

    }

   })
}
}


