import { CanActivateFn } from '@angular/router';
import { UserProfileService } from './user-profile.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  console.log('ROute guard executed...');
  const ups = inject(UserProfileService);
  console.log(ups.userData.value);
  const allow = ups.userData.value === 'student';
  // check if loogged in user is student or not
  return !allow;
};
