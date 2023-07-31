import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MachinesService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  getMachines() {
    const machinesCollection = collection(this.firestore, 'test');
    return collectionData(machinesCollection) as Observable<any[]>;
  }
}
