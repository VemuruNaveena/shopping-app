import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { categoryApiI } from './admin/category/category-interfaces';
import { Observable } from 'rxjs';
import { AccountApiI } from './admin/account-type/account-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  http = inject(HttpClient);

  constructor() {}

  fetchCategory(category: categoryApiI): Observable<categoryApiI> {
    const response = this.http.post<categoryApiI>(
      'http://localhost:3010/api/cat/types',
      category
    );
    return response;
  }

  fetchAccount(account: AccountApiI): Observable<AccountApiI> {
    const response = this.http.post<AccountApiI>(
      'http://localhost:3010/api/accountTypes ',
      account
    );
    return response;
  }
}
