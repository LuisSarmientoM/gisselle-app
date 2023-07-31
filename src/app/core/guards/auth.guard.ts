import { Dialog } from '@angular/cdk/dialog';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ModalComponent } from '@components/modal/modal.component';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const dialog = inject(Dialog);
  const isLogged = true;
  if (isLogged) {
    return true;
  }
  dialog.open(ModalComponent, {
    data: {
      message: 'Sesión expirada',
    },
  });
  router.navigate(['/login']);
  return false;
};
