import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('I am interceptor...');
  // add custom header call Authorization
  return next(req);
};
