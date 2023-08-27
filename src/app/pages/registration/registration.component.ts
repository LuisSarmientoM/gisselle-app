import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { LayoutComponent } from '@components/layout/layout.component';
import { InputErrorComponent } from '@components/input-error/input-error.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, LayoutComponent, ReactiveFormsModule, InputErrorComponent, NgFor],
  providers: [RegistrationService],
})
export class RegistrationComponent implements OnInit {
  form = this.fb.nonNullable.group({
    id: ['', [Validators.required]],
    horometroAnterior: ['', []],
    horometroActual: ['', []],
    horasTrabajadas: ['', []],
    galones: ['', []],
    galonesHora: ['', []],
    notas: ['', []],
  });
  machines: any[] = [];
  constructor(
    private readonly fb: FormBuilder,
    private readonly registrationService: RegistrationService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getMachines();
    //   this.registrationService.findMachine().then((data) => {
    //     console.log(data)
    //   })
  }
  getMachines(): void {
    const machines = localStorage.getItem('machines');

    if (machines) {
      this.machines = JSON.parse(machines);
      console.log(this.machines);
    }
  }
  onSubmit(): void {
    console.log(this.form.valid);

    console.log(this.form.getRawValue());

    if (this.form.valid) {
      this.registrationService.save(this.form.getRawValue());
    }
  }

  navigate() {
    this.router.navigate(['/usuarios'])
  }
}
