import { Component, inject } from '@angular/core';
import { UiService } from '@core/services/ui.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TippyDirective } from '@ngneat/helipopper';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, TippyDirective],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  uiService = inject(UiService);
  user = localStorage.getItem('user');
  sayHello() {
    console.log('Hello!');
  }
}
