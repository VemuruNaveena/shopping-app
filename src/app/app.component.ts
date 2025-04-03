import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from './user-profile.service';
import { loginResponseApi } from './login/login-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userProfileService = inject(UserProfileService);
  showSpinner: boolean = false;

  ngOnInit() {
    this.userProfileService.showSpinner$.subscribe((spinnerValue) => {
      console.log(spinnerValue);
      this.showSpinner = spinnerValue;
    });

    // this.userProfileService.userProfileInfo.subscribe(
    //   (data: string) => {
    //     console.log(data);
    //     // this.loggedInUsername = data;
    //   },
    //   () => {}
    // );
  }

  title = 'ShoppingApp';
  customer: any = {
    //object
    name: 'naveena',
    pno: '989-898-0987',
    isActive: true,
    fav: ['vido games', 'mobile games', 'pc-games'],
    shippingAddress: {
      stNo: '2990, lee hw',
      apt: 308,
      city: 'Fairfax',
      state: 'va',
      zip: '22031',
    },
  };

  showHome: boolean = false;
  showMen: boolean = false;
  showWomen: boolean = false;
  showKids: boolean = false;
}
