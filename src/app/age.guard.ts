import { CanMatchFn } from '@angular/router';

export const ageGuard: CanMatchFn = (route, segments) => {
  return false;
};
