
import { Injectable, inject } from '@angular/core';
import {
  Firestore, addDoc, collection, getDocs, onSnapshot, orderBy, query
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UiService } from '@core/services/ui.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  firestore = inject(Firestore);
  router = inject(Router);
  uiService = inject(UiService);
  async save(data: any) {
    const { id, ...rest } = data;
    const registrationCollection = collection(this.firestore, 'machines', id, 'resgistrations');
    await addDoc(registrationCollection, {
      ...rest,
      createAt: Date.now(),
      updateAt: Date.now(),
    }).then(() => {
      this.uiService.openModal('Registro guardado con exito');
      this.router.navigate(['/inicio'])
    }).catch((error) => {
      console.log(error);
    })
  }
}
