import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputErrorComponent } from 'src/app/components/input-error/input-error.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, InputErrorComponent],
  providers: [AuthService],
})
export default class AuthComponent {
  hidePassword = true;
  form = this.fb.nonNullable.group({
    email: [
      'lsarmientom010@gmail.com',
      [Validators.email, Validators.required],
    ],
    password: ['2fd80e30', [Validators.required, Validators.minLength(8)]],
  });
  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  onSubmit(): void {
    this.form.markAsTouched();
    console.log(this.form.value);
    if (this.form.invalid) return;
    this.authService.login(this.form.getRawValue());
  }
}
