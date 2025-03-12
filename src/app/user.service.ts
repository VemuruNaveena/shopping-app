import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  fetchUsers() {
    return this.http.get('http://localhost:3010/api/users');
  }
}
