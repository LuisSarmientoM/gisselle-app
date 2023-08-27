import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '@components/layout/layout.component';
import { UiService } from '@core/services/ui.service';
import { UsersService } from './users.service';
import { UserCardComponent } from './user-card/user-card.component';
import { user } from '@angular/fire/auth';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [
    LayoutComponent,
    RouterLink,
    NgFor,
    UserCardComponent
  ],
  providers: [
    UsersService
  ]
})
export default class UsersComponent implements OnInit {
  private uiService = inject(UiService);
  private userService = inject(UsersService);

  users: any[] = []
  ngOnInit() {
    this.uiService.setToolbar([
      {
        type: 'title',
        text: 'Usuarios',
      },
    ]);
    this.getUsers()
  }

  getUsers() {
    this.userService.user.subscribe((res) => {
      console.log(res);

      this.users.push(res)
    })
  }
}
