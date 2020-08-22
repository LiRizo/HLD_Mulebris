import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-godmothers',
  templateUrl: './register-godmothers.component.html',
  styleUrls: ['./register-godmothers.component.css']
})
export class RegisterGodmothersComponent implements OnInit {

  items: Observable<any[]>;

  constructor( db : AngularFirestore ) {
    this.items = db.collection('items').valueChanges();
   }

  ngOnInit(): void {
  }

}
