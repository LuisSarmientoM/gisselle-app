import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [],
})
export class RegistrationComponent {
  form = this.fb.group({
    name: ['as', Validators.required],
    oil: ['12', Validators.required],
    gas: ['2', Validators.required],
  });
  constructor(
    private readonly fb: FormBuilder,
    private readonly registrationService: RegistrationService
  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.registrationService.addMachine(this.form.getRawValue());
    }
  }
}
