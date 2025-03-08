import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpService = inject(SignUpService);

  signupFrom = new FormGroup({
    userName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    // confirmPassword: new FormControl(),
    role: new FormControl(),
  });

  signUpUser() {
    console.log(this.signupFrom);
    const fromvalues = this.signupFrom.value;
    this.signUpService.signUpUserApi(fromvalues).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}

// http://localhost:3010/api/signup - POST
// {
//   userName: 'val',
//     password: 'val',
//     email: 'val',
//     role: 'val'
// }

// email
// :
// "test@gmail.com"
// password
// :
// "test@123"
// role
// :
// "student"
// userName
// :
// "test"
