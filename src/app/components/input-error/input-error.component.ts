import { JsonPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  standalone: true,
  imports: [
    NgIf,
    JsonPipe
  ]
})
export class InputErrorComponent {
  @Input() control!: FormControl<string>;
}
