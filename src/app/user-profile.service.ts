import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  // userName = '';
  // bs

  private userProfileName = new BehaviorSubject<string>('');
  userProfileInfo = this.userProfileName.asObservable();

  userData = new BehaviorSubject<string>('');
  userProfileData = this.userData.asObservable();

  showSpinner = new BehaviorSubject<boolean>(false);
  showSpinner$ = this.showSpinner.asObservable();

  constructor() {}

  updateUserName(loggedInUser: string) {
    // this.userName = loggedInUser;
    this.userProfileName.next(loggedInUser);
  }

  updateData(loggedInRole: string) {
    this.userData.next(loggedInRole);
  }

  show() {
    this.showSpinner.next(true);
  }

  hide() {
    this.showSpinner.next(false);
  }
}
