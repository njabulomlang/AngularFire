import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms : any;
  userID = firebase.auth().currentUser.uid;
  ref = firebase.database().ref('rooms/' + this.userID);
  constructor( private router : Router) {
    this.ref.on('value', resp => {
      this.rooms = snapshotToArray(resp);
        console.log(this.rooms);
      })
   }

  ngOnInit() {

  }
  Profile()
  {
      this.router.navigateByUrl('/profile');
  }
  view($event,id){

  }
  logout(){
    firebase.auth().signOut().then(() => {
      console.log('logged Out');
       this.router.navigateByUrl('/');
    }).catch(function(error) {
      // An error happened.
    });

  }
}
