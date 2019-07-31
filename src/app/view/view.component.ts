import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  rooms : any;
  key: any;
  userID = firebase.auth().currentUser.uid;
  ref = firebase.database().ref('rooms/' + this.userID);
  constructor(private router: ActivatedRoute, private rout: Router) {
    this.router.paramMap.subscribe((param) => {
         this.key = param.get('key');

    })
    this.ref.orderByKey().equalTo(this.key).on('value', resp => {
      this.rooms = snapshotToArray(resp);
        console.log(this.rooms);
      })
   }

  ngOnInit() {
  }
  bookedby(){
    this.rout.navigateByUrl('details');
  }
}
