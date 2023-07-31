import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { RouterLink } from '@angular/router';
import { ButtonCloseComponent } from '@components/buttons/close/close.component';
import { UiService } from '@core/services/ui.service';
import { AuthService } from 'src/app/pages/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [NgClass, AsyncPipe, NgIf, RouterLink, ButtonCloseComponent],
})
export class LayoutComponent implements OnInit {
  uiService = inject(UiService);
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((aUser: User | null) => {
      console.log(aUser);
    });
  }
}
