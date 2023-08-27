import { Injectable, inject } from '@angular/core';
import {
  Auth,
  User,
  user,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private firestore = inject(Firestore);

  // private signIn: Auth = inject(signInWithEmailAndPassword);
  user$ = user(this.auth);
  constructor(private readonly router: Router) { }

  async login({ email, password }: Credentials) {
    await signInWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        this.getUserData(user.uid);
      }
    );
    this.redirectTo('/inicio');
  }
  redirectTo(path: string | string[]): void {
    this.router.navigate([path]);
  }

  private async getUserData(uid: string) {
    const user = doc(this.firestore, 'users', uid)
    onSnapshot(user, (doc) => {
      console.log(doc.data())
      const data = doc.data()

    })
  }
}
// active, use to grant access to the app
// new, use to request password reset
// role, use to grant access to the app