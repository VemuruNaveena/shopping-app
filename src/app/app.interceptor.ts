import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  // add custom header call Authorization
  const token = sessionStorage.getItem('TOKEN');
  const tokenValue = `Bearer ${token}`;

  return next(
    req.clone({
      setHeaders: { Authorization: tokenValue },
    })
  );
};
