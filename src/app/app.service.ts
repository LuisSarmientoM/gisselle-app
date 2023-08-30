import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot, orderBy, query, snapToData } from '@angular/fire/firestore';
import { NgEventBus } from 'ng-event-bus';

@Injectable()
export class AppService {
  private firestore = inject(Firestore);
  private eventBus = inject(NgEventBus);
  private machines: any[] = [];
  machinesCollection = collection(this.firestore, 'machines', '')
  orderByName = orderBy('name', 'asc')
  public async load(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.getMachinesFromServer(resolve)
    })
  }
  async getMachinesFromServer(resolve: ({ }) => void) {
    this.machines = [];
    const search = query(this.machinesCollection, orderBy('name', 'asc'),)
    return onSnapshot(search, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == 'added') {
          this.machines.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
        if (change.type == 'modified') {
          const index = this.machines.findIndex((machine) => machine.id == change.doc.id)
          this.machines[index] = {
            ...change.doc.data(),
            id: change.doc.id,
          }
        }
        localStorage.setItem('machines', JSON.stringify(this.machines));
        this.eventBus.cast('machines:update')
        resolve([])
      })
    }, (error) => {
      console.error(error)
      localStorage.removeItem('machines');
      this.eventBus.cast('machines:update')
      resolve(false)
    }, () => {
      console.log('complete')
    })
  }
}
