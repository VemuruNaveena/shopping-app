import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userApiI } from './user/user-interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  fetchUsers(): Observable<userApiI> {
    return this.http.get<userApiI>('http://localhost:3010/api/users');
  }
}
