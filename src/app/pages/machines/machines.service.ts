import { Injectable, inject } from '@angular/core';
import {
  CollectionReference, Firestore,
  addDoc,
  collection, deleteDoc,
  doc, getDocs, orderBy,
  query,
  updateDoc
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import Machine from './machine';
import { NgEventBus } from 'ng-event-bus';
import { Router } from '@angular/router';

@Injectable()
export class MachinesService {
  private firestore: Firestore = inject(Firestore);
  usersCollection!: CollectionReference;
  machines: Machine[] = [];

  constructor(
    private router: Router,
  ) {
    this.getMachines();
  }

  getMachines() {
    let localMachines = localStorage.getItem('machines');
    if (localMachines) {
      this.machines = JSON.parse(localMachines);
      console.log(this.machines);

    }
    return this.machines;
  }
  findOne(id: string) {
    return this.machines.find((machine) => machine.id === id);
  }
  async addMachine(data: any) {
    addDoc(collection(this.firestore, 'machines'), {
      ...data,
      createAt: Date.now(),
      updateAt: Date.now(),
    }).then(() => {
      this.router.navigate(['/maquinas'])
    })
  }
  async editMachine(data: any) {
    const { id, ...newData } = data;
    const machine = doc(this.firestore, 'machines', id);
    updateDoc(machine, {
      ...newData,
      updateAt: Date.now(),
    }).then(() => {
      this.router.navigate(['/maquinas'])
    })
  }

  async clean() {
    const collec = collection(this.firestore, 'machines');
    this.machines.map((machine) => {
      if (machine.id) {
        deleteDoc(doc(collec, machine.id));
      }
    });
  }
}
