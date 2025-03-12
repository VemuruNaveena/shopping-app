import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userService = inject(UserService);
  usersList: any[] = [];

  constructor() {
    console.log('COntr...');
  }

  ngOnInit() {
    console.log('on in it');
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.fetchUsers().subscribe(
      (resp) => {
        console.log(resp);
        this.usersList = resp['data'];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

// /api/users - GET
