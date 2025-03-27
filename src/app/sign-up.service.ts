import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loginResponseApi } from './login/login-interfaces';
import { Observable } from 'rxjs';
import { signUpApiI } from './sign-up/sign-up interfaces';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  http = inject(HttpClient);

  signUpUserApi(signUpFromDetails: signUpApiI) {
    console.log(signUpFromDetails);
    return this.http.post(
      'http://localhost:3010/api/signup',
      signUpFromDetails
    );
  }

  loginUserApi(userInfo: loginResponseApi) {
    return this.http.post('http://localhost:3010/api/login', userInfo);
  }
}
