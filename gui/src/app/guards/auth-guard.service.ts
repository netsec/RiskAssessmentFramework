import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this._authService.isAuth()) {
      return true;
  }
  this._router.navigate(['/login']);
  // you can save redirect url so after authing we can move them back to the page they requested
  return false;
} 





  constructor(private _authService: AuthService, private _router: Router) { }
}
