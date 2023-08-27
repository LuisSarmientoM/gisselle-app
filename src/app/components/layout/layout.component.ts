import {
  AsyncPipe,
  DOCUMENT,
  NgClass,
  NgFor,
  NgForOf,
  NgIf,
} from '@angular/common';
import { Component, Inject, OnInit, Optional, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonCloseComponent } from '@components/buttons/close/close.component';
import { NavigationComponent } from '@components/layout/navigation/navigation.component';
import { UiService } from '@core/services/ui.service';
import { AuthService } from 'src/app/pages/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IconComponent } from '@components/icon/icon.component';
import { NavigationFooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    NgIf,
    RouterLink,
    NgFor,
    ButtonCloseComponent,
    RouterLinkActive,
    NavigationComponent,
    NavigationFooterComponent,
    HttpClientModule,
    IconComponent,
  ],
})
export class LayoutComponent implements OnInit {
  uiService = inject(UiService);
  authService = inject(AuthService);
  @Optional() @Inject(DOCUMENT) private document: any;
  ngOnInit(): void {
    // this.authService.user$.subscribe((aUser: User | null) => {
    //   console.log(aUser);
    // });
  }
}
