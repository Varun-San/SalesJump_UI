import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loggedData = sessionStorage.getItem('authData');

  const router = inject(Router);

  if (loggedData !== null) {
    return true;
  } else {
    router.navigateByUrl('/home');
    return false;
  }
};
