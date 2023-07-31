import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  doc,
  setDoc,
  Index,
  addDoc,
  collection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  async addMachine(data: any) {
    await addDoc(collection(this.firestore, 'machines'), data);
  }
}
