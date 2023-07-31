import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-close',
  templateUrl: './close.component.html',
  standalone: true,
})
export class ButtonCloseComponent {
  @Output() onClick = new EventEmitter();
}
