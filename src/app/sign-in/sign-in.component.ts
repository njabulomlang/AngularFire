import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email;
  password;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  sign()
  {

    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then( res =>{
      console.log(res);
      //this.navCtrl.push(HomePage);
      this.router.navigateByUrl("/home") ;

    })
  }
}
