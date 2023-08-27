import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutComponent } from '@components/layout/layout.component';
import { UiService } from '@core/services/ui.service';
import { UsersService } from '../users.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputErrorComponent } from '@components/input-error/input-error.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [
    LayoutComponent,
    ReactiveFormsModule,
    InputErrorComponent
  ],
  providers: [UsersService]
})
export default class UserFormComponent implements OnInit {
  form = this.formBuilder.nonNullable.group({
    uid: [''],
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    role: ['', Validators.required],
    password: ['', Validators.required],
    active: [true, Validators.required],
  });
  uid = this.route.snapshot.params['id'];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UiService,
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.uiService.setToolbar([
      {
        type: 'title',
        text: 'Nuevo Usuario',
      },
    ]);
    if (this.uid) {
      this.usersService.getOneUser(this.route.snapshot.params['id']).subscribe((res: any) => {
        this.form.patchValue(res.data)
        this.form.controls.email.disable()
        this.form.controls.password.disable()
      })
    }
  }
  navigate() {
    this.router.navigate(['/usuarios'])
  }

  onSubmit() {
    console.log(this.form.getRawValue());
    if (this.form.valid) {
      if (this.uid) {
        this.usersService.updateUser(this.form.getRawValue());
      } else {
        this.usersService.createUser(this.form.getRawValue());
      }
    }
  }
}
