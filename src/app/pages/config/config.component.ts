import { Component, OnInit, inject } from '@angular/core';

import { UiService } from '@core/services/ui.service';
import { LayoutComponent } from '@components/layout/layout.component';
import { getAuth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  standalone: true,
  imports: [
    LayoutComponent,
  ]
})
export default class ConfigComponent {

  private uiService = inject(UiService);;
  private router = inject(Router);;
  ngOnInit() {
    this.uiService.setToolbar([
      {
        type: 'title',
        text: 'Usuarios',
      },
    ]);
  }

  signOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['/login'])
    }).catch((error) => {
      // An error happened.
    });
  }
}
