import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { loginResponseApi } from './login-interfaces';

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

  private createForm(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(4),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login(): void {
    // show spinner
    this.userProfileService.show();
    console.log(this.loginForm);
    this.invalidCredentials = false;
    this.signUpService.loginUserApi(this.loginForm.value).subscribe(
      (response: loginResponseApi) => {
        this.handleSuccess(response);
      },
      (error: any) => {
        this.handleError(error);
      }
    );
  }

  private handleSuccess(response: loginResponseApi) {
    console.log(response);
    this.userProfileService.updateUserName(response.data.user.userName);
    this.userProfileService.updateData(response.data.user.role);
    sessionStorage.setItem('TOKEN', response.data.token);
    this.router.navigate(['home']);
    // turn off spinner
    this.userProfileService.hide();
  }

  private handleError(error: any) {
    console.log(error);
    this.invalidCredentials = true;
    this.userProfileService.hide();
    // turn off spinner
  }
}
