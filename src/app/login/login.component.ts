import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  signUpService = inject(SignUpService);
  router = inject(Router);
  invalidCredentials: boolean = false;

  loginForm: FormGroup;

  constructor() {
    this.createForm();
  }

  createForm() {
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
      (response) => {
        console.log(response);
        this.router.navigate(['home']);
      },
      (error) => {
        console.log(error);
        this.invalidCredentials = true;
      }
    );
  }
}
