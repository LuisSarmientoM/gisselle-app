import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '@components/layout/layout.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  imports: [LayoutComponent]
})
export default class DetailComponent {

}
