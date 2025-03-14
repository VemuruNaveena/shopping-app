import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private signUpService = inject(SignUpService);
  private userProfileService = inject(UserProfileService);
  private router = inject(Router);
  invalidCredentials: boolean = false;

  loginForm: FormGroup;

  constructor() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(4),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    console.log(this.loginForm);
    this.invalidCredentials = false;
    this.signUpService.loginUserApi(this.loginForm.value).subscribe(
      (response: any) => {
        this.handleSuccess(response);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  private handleSuccess(response) {
    console.log(response);
    //new service - variable
    //this.userProfileService.userName = response.data.user.userName;
    this.userProfileService.updateUserName(response.data.user.userName);
    this.router.navigate(['home']);
  }

  private handleError(error) {
    console.log(error);
    this.invalidCredentials = true;
  }
}

// true && true && true = true
// true && false && true = false
// false && false = false

// true || true = true
// true || false = true
// false || false = false
