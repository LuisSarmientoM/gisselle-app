import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  imports: [NgClass, NgIf],
})
export class FilterComponent {
  searchVisible = false;
  toggleSearch() {
    this.searchVisible = !this.searchVisible;
  }
}
