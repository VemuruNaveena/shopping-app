import { HttpInterceptorFn } from '@angular/common/http';
import { CollegeService } from './college.service';
import { inject } from '@angular/core';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('I am interceptor...');
  // add custom header call Authorization
  console.log(req);
  return next(req);
};
