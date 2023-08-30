import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LayoutComponent } from '@components/layout/layout.component';
import { UiService } from '@core/services/ui.service';
import { MachinesService } from '../../machines.service';
import { InputErrorComponent } from '@components/input-error/input-error.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-machines-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, LayoutComponent, InputErrorComponent],
  providers: [MachinesService],
})
export default class MachineFormComponent implements OnInit {
  form = this.fb.nonNullable.group({
    id: [''],
    name: ['', Validators.required],
    oil: ['', Validators.required],
    gas: ['', Validators.required],
    filter: ['', Validators.required],

  });
  paramId = this.route.snapshot.params['id'];
  constructor(
    private readonly fb: FormBuilder,
    private uiService: UiService,
    private machineService: MachinesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.uiService.setToolbar([
      {
        type: 'title',
        text: 'Nueva Máquina',
      },
    ]);
    if (this.paramId) {
      this.buildForm();
    }
  }

  closeDialog() {
    // this.dialogRef.close();
  }

  private buildForm() {
    const findMachine = this.machineService.findOne(this.paramId)
    if (findMachine) {
      this.form.patchValue(findMachine);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.paramId) {
        this.machineService.editMachine(this.form.getRawValue());
      } else {
        this.machineService.addMachine(this.form.getRawValue());
      }
    }
  }

  navigate() {
    this.router.navigate(['/maquinas'])
  }
}
