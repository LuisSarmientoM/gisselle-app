import { Injectable, inject } from '@angular/core';
import {
  Auth,
  User,
  user,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
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
  // private signIn: Auth = inject(signInWithEmailAndPassword);
  user$ = user(this.auth);
  constructor(private readonly router: Router) {}

  async login({ email, password }: Credentials) {
    await signInWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user);
      }
    );
    this.redirectTo('/inicio');
  }
  redirectTo(path: string | string[]): void {
    this.router.navigate([path]);
  }
}
