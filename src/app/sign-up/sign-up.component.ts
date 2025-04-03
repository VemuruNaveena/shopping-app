import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { signUpApiI } from './sign-up interfaces';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpService = inject(SignUpService);
  userProfileService = inject(UserProfileService);

  signupFrom = new FormGroup({
    userName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    // confirmPassword: new FormControl(),
    role: new FormControl(),
  });

  signUpUser(): void {
    this.userProfileService.show();
    console.log(this.signupFrom);
    const fromvalues = this.signupFrom.value;
    this.signUpService.signUpUserApi(fromvalues).subscribe(
      (response: signUpApiI) => {
        console.log(response);
        this.userProfileService.hide();
      },
      (error: any) => {
        console.log('Error', error);
        this.userProfileService.hide();
      }
    );
  }
}
