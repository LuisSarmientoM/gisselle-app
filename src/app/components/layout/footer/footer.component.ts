import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TippyDirective } from '@ngneat/helipopper';

@Component({
  selector: 'app-navigation-footer',
  standalone: true,
  imports: [CommonModule, TippyDirective],
  templateUrl: './footer.component.html',
  styles: [],
})
export class NavigationFooterComponent {
  sayHello() {
    alert('Hello!');
  }
}
