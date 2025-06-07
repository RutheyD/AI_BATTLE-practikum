import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('token')
console.log(token);

  if (token) {
   const clonedRequest = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    
    return next(clonedRequest);
  }
  // alert("failed in authorization, user isn't valied")
  return next(req);
};
