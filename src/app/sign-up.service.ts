import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loginResponseApi } from './login/login-interfaces';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  http = inject(HttpClient);

  signUpUserApi(signUpFromDetails: any) {
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

// tryiung to send this
// {
//   "name": "testn",
//   "email": "teste",
//   "password": "testp",
//   "confirmPassword": "testcp",
//   "role": "admin"
// }

// // backend is expecting
// {
//   userName: 'some val',
//   userEmail:'some val',
//   password: 'some val',
//   confirmPassword: 'some val',
//   role: 'some val',
//   }

// {
//   "userName": "testn",
//   "userEmail": "teste",
//   "password": "testp",
//   "confirmPassword": "testcp",
//   "role": "testr"
// }
