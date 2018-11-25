import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
}
