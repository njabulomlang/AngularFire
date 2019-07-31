import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  rooms : any;
  key: any;
  userID = firebase.auth().currentUser.uid;
  ref = firebase.database().ref('books/' + this.userID);
  constructor(private router : ActivatedRoute) {

    this.ref.orderByKey().equalTo(this.key).on('value', resp => {
      this.rooms = snapshotToArray(resp);
        console.log(this.rooms);
      })
   }

  ngOnInit() {
  }

}
