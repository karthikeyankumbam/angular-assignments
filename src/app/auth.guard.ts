import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './assignment-5/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice= inject(AuthService);

  // Check if the user is logged in
  if (authservice.getValue()) {
    return true; // Allow access
  }

  return false;
};
