import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Firestore, collection, getDocs, orderBy, query } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UiService } from '@core/services/ui.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable()
export class UsersService {
  // private firestore: Firestore = inject(Firestore);
  private auth: Auth = inject(Auth);
  private router = inject(Router);
  private uiService = inject(UiService);
  private firestore = inject(Firestore);
  private _users = new Subject<any>();
  user: Observable<any>;
  usersCollection = collection(this.firestore, 'users')
  constructor(
    private http: HttpClient,
  ) {
    this.user = this._users.asObservable()
    this.getUsers()
  }

  createUser(data: { email: string, name: string, role: string, active: boolean }) {
    this.http.post('https://gissele-services-6f9v-dev.fl0.io/create/user', data).subscribe((res: any) => {
      this.uiService.openModal(res.message)
    });
  }

  async getUsers() {
    this.http.get('https://gissele-services-6f9v-dev.fl0.io/users').subscribe((res: any) => {
      res.data.forEach((user: any) => {
        this._users.next(user)

      })
    });
  }
  getOneUser(uid: string) {
    return this.http.get('https://gissele-services-6f9v-dev.fl0.io/users/one/' + uid)
  }

  updateUser(data: { uid: string, email: string, name: string, role: string, active: boolean }) {
    this.http.post('https://gissele-services-6f9v-dev.fl0.io/update/user', data).subscribe((res: any) => {
      this.uiService.openModal(res.message)
      this.router.navigate(['/usuarios'])
    });
  }

  // await getUserData() {

  // }
}
