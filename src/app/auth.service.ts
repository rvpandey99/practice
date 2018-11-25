import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then( success => { this.router.navigate([returnUrl]); });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
