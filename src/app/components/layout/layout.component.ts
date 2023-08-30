import {
  NgFor, NgIf
} from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationComponent } from '@components/layout/navigation/navigation.component';
import { UiService } from '@core/services/ui.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NavigationComponent,
  ],
})
export class LayoutComponent {
  uiService = inject(UiService);
}
