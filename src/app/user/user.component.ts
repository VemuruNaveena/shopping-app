import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { userApi } from '../login/login-interfaces';
import { userApiI } from './user-interfaces';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userService = inject(UserService);
  ups = inject(UserProfileService);
  usersList: any[] = [];

  constructor() {
    console.log('COntr...');
  }

  ngOnInit() {
    console.log('on in it');
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.ups.show();
    this.userService.fetchUsers().subscribe(
      (resp: userApiI) => {
        console.log(resp);
        this.usersList = resp['data'];
        this.ups.hide();
      },
      (error: any) => {
        console.log(error);
        this.ups.hide();
      }
    );
  }
}

// /api/users - GET
